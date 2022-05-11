import React from 'react';
import Navbar from '../../../components/navbar/Navbar';
import Sidebar from '../../../components/sidebar/Sidebar';
import './newpasien.scss';
import { useState } from 'react';
import { gql, useQuery, useMutation } from '@apollo/client';

const insertData = gql`
  mutation MyMutation($object: rekammedis_pasien_insert_input = {}) {
    insert_rekammedis_pasien_one(object: $object) {
      alamat
      diagnosa
      id
      nama_pasien
      no_telepon
      tanggal_pemeriksaan
      tindakan
    }
  }
`;
const NewPasien = () => {
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

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <h1>Tambah Pasien</h1>
        <div className="top">
          <div>Pasien Details</div>
        </div>
        <div className="bottom">
          <form>
            <div className="forminput">
              <label>Nama Pasien *</label>
              <input
                type="text"
                placeholder="Nama Pasien"
                name="nama_pasien"
                onChange={handleonChange}
              />
            </div>
            <div className="forminput">
              <label>Tanggal Pemeriksaan *</label>
              <input
                type="date"
                name="tanggal_pemeriksaan"
                onChange={handleonChange}
              />
            </div>
            <div className="forminput">
              <label>No Telepon *</label>
              <input
                type="text"
                name="no_telepon"
                placeholder="+62-xxx-xxx-xx"
                onChange={handleonChange}
              />
            </div>
            <div className="forminput">
              <label>Alamat *</label>
              <input
                type="text"
                name="alamat"
                placeholder="Jl.xxxx.Rt.x/Rw.x"
                onChange={handleonChange}
              />
            </div>
            <div className="forminput">
              <label>Diagnosa *</label>
              <input
                type="text"
                name="diagnosa"
                placeholder="Penyakit Diderita"
                onChange={handleonChange}
              />
            </div>
            <div className="forminput">
              <label>Tindakan *</label>
              <input
                type="text"
                name="tindakan"
                placeholder="Inpatient Or Outpatient"
                onChange={handleonChange}
              />
            </div>
          </form>
          <button className="btnKirim" onClick={handleSubmit}>
            Kirim
          </button>
          <button className="btnReset">Reset</button>
        </div>
      </div>
    </div>
  );
};

export default NewPasien;
