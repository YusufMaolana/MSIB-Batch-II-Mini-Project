import Navbar from '../../../components/navbar/Navbar';
import Sidebar from '../../../components/sidebar/Sidebar';
import React from 'react';
import './editdokter.scss';
import { useParams } from 'react-router-dom';
import { gql, useQuery, useMutation } from '@apollo/client';
import { useState, useEffect } from 'react';

const editData = gql`
  query MyQuery($id: Int!) {
    rekammedis_dokter_by_pk(id: $id) {
      alamat
      email
      id
      jenis_kelamin
      nama_dokter
      no_induk
      no_telepon
      pendidikan_pertama
      pendidikan_lanjutan
      status
      tanggal_bergabung
      gelar
    }
  }
`;

const Update = gql`
  mutation MyMutation($_eq: Int!, $_set: rekammedis_dokter_set_input!) {
    update_rekammedis_dokter(where: { id: { _eq: $_eq } }, _set: $_set) {
      affected_rows
      returning {
        alamat
        email
        id
        jenis_kelamin
        nama_dokter
        no_induk
        no_telepon
        pendidikan_pertama
        pendidikan_lanjutan
        status
        tanggal_bergabung
        gelar
      }
    }
  }
`;

const FormEdit = () => {
  let { id } = useParams();

  const {
    data: respondedit,
    loading: respondloadingedit,
    error,
  } = useQuery(editData, {
    variables: {
      id: id,
    },
  });

  const [a, sa] = useState();

  useEffect(() => {
    if (respondedit) {
      sa(respondedit.rekammedis_dokter_by_pk || []);
    }
  }, [respondedit]);

  console.log(a);

  const handleonChange = (e) => {
    sa({ ...a, [e.target.name]: e.target.value });
  };

  const [updatedokterlama, { data: da, loading: la, error: erra }] =
    useMutation(Update);

  const handleonSumbit = async (e) => {
    e.preventDefault();
    const idx = await a?.id;
    const newData = {
      nama_dokter: a.nama_dokter,
      no_induk: a.no_induk,
      jenis_kelamin: a.jenis_kelamin,
      tanggal_bergabung: a.tanggal_bergabung,
      no_telepon: a.no_telepon,
      email: a.email,
      alamat: a.alamat,
      pendidikan_pertama: a.pendidikan_pertama,
      pendidikan_lanjutan: a.pendidikan_lanjutan,
      tanggal_bergabung: a.tanggal_bergabung,
      hasil_pemeriksaan: a.hasil_pemeriksaan,
      gelar: a.gelar,
      status: a.status,
    };

    console.log(newData, idx);
    await updatedokterlama({
      variables: {
        _eq: idx,
        _set: newData,
      },
    });
    alert('Data Berhasil Di Ubah');
  };

  return (
    <div className="formedit">
      <Sidebar />
      <div className="formeditContainer">
        <Navbar />
        <div className="titleTop">Edit Pasien Data</div>
        <div className="formContainer">
          <form>
            <div className="forminput">
              <label className="inputLabel">No Induk Pegawai *</label>
              <input
                className="inputDokter"
                type="text"
                placeholder="001-100"
                name="no_induk"
                onChange={handleonChange}
                value={a?.no_induk || ''}
              />
            </div>
            <div className="forminput">
              <label className="inputLabel">Nama Dokter *</label>
              <input
                className="inputDokter"
                type="text"
                placeholder="Nama Lengkap Beserta Gelar"
                name="nama_dokter"
                onChange={handleonChange}
                value={a?.nama_dokter || ''}
              />
            </div>
            <div className="forminput">
              <label className="inputLabel">Jenis Kelamin *</label>
              <input
                className="inputDokter"
                type="text"
                placeholder="Perempuan / Laki-Laki"
                name="jenis_kelamin"
                onChange={handleonChange}
                value={a?.jenis_kelamin || ''}
              />
            </div>
            <div className="forminput">
              <label className="inputLabel">Tanggal Bergabung *</label>
              <input
                className="inputDokter"
                type="date"
                placeholder="MM-DD-YY"
                name="tanggal_bergabung"
                onChange={handleonChange}
                value={a?.tanggal_bergabung || ''}
              />
            </div>
            <div className="forminput">
              <label className="inputLabel">No Telepon *</label>
              <input
                className="inputDokter"
                type="text"
                name="no_telepon"
                placeholder="+62-xxx-xxx-xx"
                onChange={handleonChange}
                value={a?.no_telepon || ''}
              />
            </div>
            <div className="forminput">
              <label className="inputLabel">Email *</label>
              <input
                className="inputDokter"
                type="text"
                name="email"
                placeholder="example@gmail.com"
                onChange={handleonChange}
                value={a?.email || ''}
              />
            </div>
            <div className="forminput">
              <label className="inputLabel">Alamat *</label>
              <input
                className="inputDokter"
                type="text"
                name="alamat"
                placeholder="Jl.xxx No.xx /Rtxx.Rw.xx"
                onChange={handleonChange}
                value={a?.alamat || ''}
              />
            </div>
            <div className="forminput">
              <label className="inputLabel">Riwayat Pendidikan Pertama *</label>
              <input
                className="inputDokter"
                type="text"
                name="pendidikan_pertama"
                placeholder="Riwayat Pendidikan Pertama"
                onChange={handleonChange}
                value={a?.pendidikan_pertama || ''}
              />
            </div>
            <div className="forminput">
              <label className="inputLabel">
                Riwayat Pendidikan Lanjutan *
              </label>
              <input
                className="inputDokter"
                type="text"
                name="pendidikan_lanjutan"
                placeholder="Riwayat Pendidikan Lanjutan"
                onChange={handleonChange}
                value={a?.pendidikan_lanjutan || ''}
              />
            </div>
            <div className="forminput">
              <label className="inputLabel">Gelar Kedokteran *</label>
              <input
                className="inputDokter"
                type="text"
                name="gelar"
                placeholder="Gelar Kedokteran"
                onChange={handleonChange}
                value={a?.gelar || ''}
              />
            </div>
            <div className="forminput">
              <label className="inputLabel">Status *</label>
              <input
                className="inputDokter"
                type="text"
                name="status"
                placeholder="Present/Absent"
                onChange={handleonChange}
                value={a?.status || ''}
              />
            </div>
          </form>
          <button className="btnSave" onClick={handleonSumbit}>
            Simpan
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormEdit;
