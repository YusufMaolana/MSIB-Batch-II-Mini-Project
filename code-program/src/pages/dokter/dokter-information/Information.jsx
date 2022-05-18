import Navbar from '../../../components/navbar/Navbar';
import Sidebar from '../../../components/sidebar/Sidebar';
import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import { useParams } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';
import { useState, useEffect } from 'react';
import './information.scss';

const dokter = gql`
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

const Information = () => {
  let { id } = useParams();

  const {
    data: respondedit,
    loading: respondloadingedit,
    error,
  } = useQuery(dokter, {
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

  return (
    <div className="information">
      <Sidebar />
      <div className="informationContainer">
        <Navbar />
        <div className="titleinformation">Information Dokter</div>
        <div className="formContainerinformation">
          <form>
            <div className="forminput">
              <label className="inputLabel">No Induk Pegawai *</label>
              <input
                className="inputDokter"
                type="text"
                placeholder="001-100"
                name="no_induk"
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
                value={a?.gelar || ''}
              />
              <div className="ttd">
                <label className="atas">Pimpinan Klinik </label>
                <label className="bawah">Dr.Imran </label>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Information;
