import Navbar from '../../../components/navbar/Navbar';
import Sidebar from '../../../components/sidebar/Sidebar';
import React from 'react';
import './dokterfrom.scss';
import { useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { color } from '@mui/system';

const insertData = gql`
  mutation MyMutation($object: rekammedis_dokter_insert_input = {}) {
    insert_rekammedis_dokter_one(object: $object) {
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

const FormDokter = () => {
  const [state, setState] = useState({});

  const [masukanData, { data: dataInsert, loading: loadingInsert }] =
    useMutation(insertData);

  const handleonChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  console.log(state);
  const handleSubmit = () => {
    console.log('dari Submit : ', state);

    masukanData({
      variables: {
        object: state,
      },
    });

    alert('Data Berhasil Terkirim...');
  };

  const reset = () => {
    setState({});
  };
  return (
    <div className="formedit">
      <Sidebar />
      <div className="formeditContainer">
        <Navbar />
        <div className="titleTop">New Dokter Data</div>
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
                value={state.no_induk || ''}
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
                value={state.nama_dokter || ''}
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
                value={state.jenis_kelamin || ''}
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
                value={state.tanggal_bergabung || ''}
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
                value={state.no_telepon || ''}
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
                value={state.email || ''}
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
                value={state.alamat || ''}
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
                value={state.pendidikan_pertama || ''}
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
                value={state.pendidikan_lanjutan || ''}
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
                value={state.gelar || ''}
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
                value={state.status || ''}
              />
            </div>
          </form>
          <button className="btnKirimInput" onClick={handleSubmit}>
            Kirim
          </button>
          <button className="btnResetInput" onClick={reset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormDokter;
