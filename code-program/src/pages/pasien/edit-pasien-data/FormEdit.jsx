import Navbar from '../../../components/navbar/Navbar';
import Sidebar from '../../../components/sidebar/Sidebar';
import React from 'react';
import './formedit.scss';
import { useParams } from 'react-router-dom';
import {
  gql,
  useQuery,
  useMutation,
  setLogVerbosity,
  useSubscription,
} from '@apollo/client';
import { useState, useEffect } from 'react';

const editData = gql`
  query MyQuery($id: Int!) {
    rekammedis_pasien_by_pk(id: $id) {
      alamat
      diagnosa_awal
      diagnosa_sekunder
      email
      hasil_pemeriksaan
      id
      jenis_kelamin
      nama_pasien
      no_rekammedis
      no_telepon
      obat
      riwayat_alergi
      tanggal_pemeriksaan
      tindakan
    }
  }
`;

const Update = gql`
  mutation MyMutation($_eq: Int!, $_set: rekammedis_pasien_set_input!) {
    update_rekammedis_pasien(where: { id: { _eq: $_eq } }, _set: $_set) {
      affected_rows
      returning {
        alamat
        diagnosa_awal
        diagnosa_sekunder
        email
        hasil_pemeriksaan
        id
        jenis_kelamin
        nama_pasien
        no_rekammedis
        no_telepon
        obat
        riwayat_alergi
        tanggal_pemeriksaan
        tindakan
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
      sa(respondedit.rekammedis_pasien_by_pk || []);
    }
  }, [respondedit]);

  console.log(a);

  const handleonChange = (e) => {
    sa({ ...a, [e.target.name]: e.target.value });
  };

  const [updatepasienlama, { data: da, loading: la, error: erra }] =
    useMutation(Update);

  const handleonSumbit = async (e) => {
    e.preventDefault();
    const idx = await a?.id;
    const newData = {
      nama_pasien: a.nama_pasien,
      no_rekammedis: a.no_rekammedis,
      jenis_kelamin: a.jenis_kelamin,
      tanggal_pemeriksaan: a.tanggal_pemeriksaan,
      no_telepon: a.no_telepon,
      email: a.email,
      alamat: a.alamat,
      diagnosa_awal: a.diagnosa_awal,
      diagnosa_sekunder: a.diagnosa_sekunder,
      riwayat_alergi: a.riwayat_alergi,
      hasil_pemeriksaan: a.hasil_pemeriksaan,
      obat: a.obat,
      tindakan: a.tindakan,
    };

    console.log(newData, idx);
    await updatepasienlama({
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
        <div className="titleForm">
          <h1>Formulir Edit Pasien</h1>
        </div>
        <div className="formContainer">
          <form>
            <div className="forminput">
              <label>No Rekam Medis *</label>
              <input
                type="text"
                placeholder="001-100"
                name="no_rekammedis"
                onChange={handleonChange}
                value={a?.no_rekammedis || ''}
              />
            </div>
            <div className="forminput">
              <label>Nama Pasien *</label>
              <input
                type="text"
                placeholder="Nama Lengkap"
                name="nama_pasien"
                value={a?.nama_pasien || ''}
                onChange={handleonChange}
              />
            </div>
            <div className="forminput">
              <label>Jenis Kelamin *</label>
              <input
                type="text"
                placeholder="Perempuan / Laki-Laki"
                name="jenis_kelamin"
                value={a?.jenis_kelamin || ''}
                onChange={handleonChange}
              />
            </div>
            <div className="forminput">
              <label>Tanggal Pemeriksaan *</label>
              <input
                type="date"
                placeholder="MM-DD-YY"
                name="tanggal_pemeriksaan"
                value={a?.tanggal_pemeriksaan || ''}
                onChange={handleonChange}
              />
            </div>
            <div className="forminput">
              <label>No Telepon *</label>
              <input
                type="text"
                name="no_telepon"
                placeholder="+62-xxx-xxx-xx"
                value={a?.no_telepon || ''}
                onChange={handleonChange}
              />
            </div>
            <div className="forminput">
              <label>Email *</label>
              <input
                type="text"
                name="email"
                placeholder="example@gmail.com"
                value={a?.email || ''}
                onChange={handleonChange}
              />
            </div>
            <div className="forminput">
              <label>Alamat *</label>
              <input
                type="text"
                name="alamat"
                placeholder="Jl.xxx No.xx /Rtxx.Rw.xx"
                value={a?.alamat || ''}
                onChange={handleonChange}
              />
            </div>
            <div className="forminput">
              <label>Diagnosa Awal Pasien *</label>
              <input
                type="text"
                name="diagnosa_awal"
                placeholder="Diagnosa Penyakit Awal"
                value={a?.diagnosa_awal || ''}
                onChange={handleonChange}
              />
            </div>
            <div className="forminput">
              <label>Diagnosa Sekunder*</label>
              <input
                type="text"
                name="diagnosa_sekunder"
                placeholder="Diagnosa Penyakit Lanjutan"
                onChange={handleonChange}
                value={a?.diagnosa_sekunder || ''}
              />
            </div>
            <div className="forminput">
              <label>Riwayat Alergi *</label>
              <input
                type="text"
                name="riwayat_alergi"
                placeholder="Alergi Yang Diderita"
                onChange={handleonChange}
                value={a?.riwayat_alergi || ''}
              />
            </div>
            <div className="forminput">
              <label>Hasil Pemeriksaan *</label>
              <input
                type="text"
                name="hasil_pemeriksaan"
                placeholder="Hasil Pemeriksaan Akhir"
                onChange={handleonChange}
                value={a?.hasil_pemeriksaan || ''}
              />
            </div>
            <div className="forminput">
              <label>Terapi / Obat Yang Diberikan *</label>
              <input
                type="text"
                name="obat"
                placeholder="Obat Yang Diberikan"
                onChange={handleonChange}
                value={a?.obat || ''}
              />
            </div>
            <div className="forminput">
              <label>Tindakan *</label>
              <input
                type="text"
                name="tindakan"
                placeholder="Inpatient/Outpatient"
                onChange={handleonChange}
                value={a?.tindakan || ''}
              />
            </div>
          </form>
          <button className="btnKirim" onClick={handleonSumbit}>
            Kirim
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormEdit;
