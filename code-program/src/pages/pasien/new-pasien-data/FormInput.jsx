import Navbar from '../../../components/navbar/Navbar';
import Sidebar from '../../../components/sidebar/Sidebar';
import React from 'react';
import './forminput.scss';
import { useState } from 'react';
import { gql, useQuery, useMutation } from '@apollo/client';

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

    alert('Berhasil...');
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
        <div className="titleForm">
          <h1>Formulir Data Pasien</h1>
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
                value={state.no_rekammedis || ''}
              />
            </div>
            <div className="forminput">
              <label>Nama Pasien *</label>
              <input
                type="text"
                placeholder="Nama Lengkap"
                name="nama_pasien"
                onChange={handleonChange}
                value={state.nama_pasien || ''}
              />
            </div>
            <div className="forminput">
              <label>Jenis Kelamin *</label>
              <input
                type="text"
                placeholder="Perempuan / Laki-Laki"
                name="jenis_kelamin"
                onChange={handleonChange}
                value={state.jenis_kelamin || ''}
              />
            </div>
            <div className="forminput">
              <label>Tanggal Pemeriksaan *</label>
              <input
                type="date"
                placeholder="MM-DD-YY"
                name="tanggal_pemeriksaan"
                onChange={handleonChange}
                value={state.tanggal_pemeriksaan || ''}
              />
            </div>
            <div className="forminput">
              <label>No Telepon *</label>
              <input
                type="text"
                name="no_telepon"
                placeholder="+62-xxx-xxx-xx"
                onChange={handleonChange}
                value={state.no_telepon || ''}
              />
            </div>
            <div className="forminput">
              <label>Email *</label>
              <input
                type="text"
                name="email"
                placeholder="example@gmail.com"
                onChange={handleonChange}
                value={state.email || ''}
              />
            </div>
            <div className="forminput">
              <label>Alamat *</label>
              <input
                type="text"
                name="alamat"
                placeholder="Jl.xxx No.xx /Rtxx.Rw.xx"
                onChange={handleonChange}
                value={state.alamat || ''}
              />
            </div>
            <div className="forminput">
              <label>Diagnosa Awal Pasien *</label>
              <input
                type="text"
                name="diagnosa_awal"
                placeholder="Diagnosa Penyakit Awal"
                onChange={handleonChange}
                value={state.diagnosa_awal || ''}
              />
            </div>
            <div className="forminput">
              <label>Diagnosa Sekunder*</label>
              <input
                type="text"
                name="diagnosa_sekunder"
                placeholder="Diagnosa Penyakit Lanjutan"
                onChange={handleonChange}
                value={state.diagnosa_sekunder || ''}
              />
            </div>
            <div className="forminput">
              <label>Riwayat Alergi *</label>
              <input
                type="text"
                name="riwayat_alergi"
                placeholder="Alergi Yang Diderita"
                onChange={handleonChange}
                value={state.riwayat_alergi || ''}
              />
            </div>
            <div className="forminput">
              <label>Hasil Pemeriksaan *</label>
              <input
                type="text"
                name="hasil_pemeriksaan"
                placeholder="Hasil Pemeriksaan Akhir"
                onChange={handleonChange}
                value={state.hasil_pemeriksaan || ''}
              />
            </div>
            <div className="forminput">
              <label>Terapi / Obat Yang Diberikan *</label>
              <input
                type="text"
                name="obat"
                placeholder="Obat Yang Diberikan"
                onChange={handleonChange}
                value={state.obat || ''}
              />
            </div>
            <div className="forminput">
              <label>Tindakan *</label>
              <input
                type="text"
                name="tindakan"
                placeholder="Inpatient/Outpatient"
                onChange={handleonChange}
                value={state.tindakan || ''}
              />
            </div>
          </form>
          <button className="btnKirim" onClick={handleSubmit}>
            Kirim
          </button>
          <button className="btnReset" onClick={reset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormInput;