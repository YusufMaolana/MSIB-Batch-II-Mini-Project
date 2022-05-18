import Navbar from '../../../components/navbar/Navbar';
import Sidebar from '../../../components/sidebar/Sidebar';
import React from 'react';
import './forminput.scss';
import { useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { color } from '@mui/system';

const insertData = gql`
  mutation MyMutation($object: rekammedis_pasien_insert_input = {}) {
    insert_rekammedis_pasien_one(object: $object) {
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
      pemeriksa
    }
  }
`;

const FormInput = () => {
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
        <div className="titleTop">New Pasien Data</div>
        <div className="titleFormInput">Formulir Data Pasien</div>
        <div className="formContainer">
          <form>
            <div className="forminput">
              <label className="inputLabel">No Rekam Medis *</label>
              <input
                className="inputPasien"
                type="text"
                placeholder="001-100"
                name="no_rekammedis"
                onChange={handleonChange}
                value={state.no_rekammedis || ''}
              />
            </div>
            <div className="forminput">
              <label className="inputLabel">Nama Pasien *</label>
              <input
                className="inputPasien"
                type="text"
                placeholder="Nama Lengkap"
                name="nama_pasien"
                onChange={handleonChange}
                value={state.nama_pasien || ''}
              />
            </div>
            <div className="forminput">
              <label className="inputLabel">Jenis Kelamin *</label>
              <input
                className="inputPasien"
                type="text"
                placeholder="Perempuan / Laki-Laki"
                name="jenis_kelamin"
                onChange={handleonChange}
                value={state.jenis_kelamin || ''}
              />
            </div>
            <div className="forminput">
              <label className="inputLabel">Tanggal Pemeriksaan *</label>
              <input
                className="inputPasien"
                type="date"
                placeholder="MM-DD-YY"
                name="tanggal_pemeriksaan"
                onChange={handleonChange}
                value={state.tanggal_pemeriksaan || ''}
              />
            </div>
            <div className="forminput">
              <label className="inputLabel">No Telepon *</label>
              <input
                className="inputPasien"
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
                className="inputPasien"
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
                className="inputPasien"
                type="text"
                name="alamat"
                placeholder="Jl.xxx No.xx /Rtxx.Rw.xx"
                onChange={handleonChange}
                value={state.alamat || ''}
              />
            </div>
            <div className="forminput">
              <label className="inputLabel">Diagnosa Awal Pasien *</label>
              <input
                className="inputPasien"
                type="text"
                name="diagnosa_awal"
                placeholder="Diagnosa Penyakit Awal"
                onChange={handleonChange}
                value={state.diagnosa_awal || ''}
              />
            </div>
            <div className="forminput">
              <label className="inputLabel">Diagnosa Sekunder*</label>
              <input
                className="inputPasien"
                type="text"
                name="diagnosa_sekunder"
                placeholder="Diagnosa Penyakit Lanjutan"
                onChange={handleonChange}
                value={state.diagnosa_sekunder || ''}
              />
            </div>
            <div className="forminput">
              <label className="inputLabel">Riwayat Alergi *</label>
              <input
                className="inputPasien"
                type="text"
                name="riwayat_alergi"
                placeholder="Alergi Yang Diderita"
                onChange={handleonChange}
                value={state.riwayat_alergi || ''}
              />
            </div>
            <div className="forminput">
              <label className="inputLabel">Hasil Pemeriksaan *</label>
              <input
                className="inputPasien"
                type="text"
                name="hasil_pemeriksaan"
                placeholder="Hasil Pemeriksaan Akhir"
                onChange={handleonChange}
                value={state.hasil_pemeriksaan || ''}
              />
            </div>
            <div className="forminput">
              <label className="inputLabel">
                Terapi / Obat Yang Diberikan *
              </label>
              <input
                className="inputPasien"
                type="text"
                name="obat"
                placeholder="Obat Yang Diberikan"
                onChange={handleonChange}
                value={state.obat || ''}
              />
            </div>
            <div className="forminput">
              <label className="inputLabel">Tindakan *</label>
              <input
                className="inputPasien"
                type="text"
                name="tindakan"
                placeholder="Inpatient/Outpatient"
                onChange={handleonChange}
                value={state.tindakan || ''}
              />
            </div>
            <div className="forminput">
              <label className="inputLabel">Dokter Pemeriksa *</label>
              <input
                className="inputPasien"
                type="text"
                name="pemeriksa"
                placeholder="Nama Dokter"
                onChange={handleonChange}
                value={state.pemeriksa || ''}
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

export default FormInput;
