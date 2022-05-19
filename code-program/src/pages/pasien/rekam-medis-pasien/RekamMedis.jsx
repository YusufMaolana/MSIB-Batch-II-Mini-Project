import Navbar from '../../../components/navbar/Navbar';
import Sidebar from '../../../components/sidebar/Sidebar';
import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import { useParams } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';
import { useState, useEffect } from 'react';
import './rekammedis.scss';

const tampil = gql`
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
      pemeriksa
    }
  }
`;

const RekamMedis = () => {
  let { id } = useParams();

  const {
    data: respondedit,
    loading: respondloadingedit,
    error,
  } = useQuery(tampil, {
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

  return (
    <div className="rekammedis">
      <Sidebar />
      <div className="rekammedisContainer">
        <Navbar />
        <div className="titlerekammedis">Rekam Medis</div>
        <div className="titleFormrekammedis">Rekam Medis Pasien</div>
        <div className="formContainerrekammedis">
          <form>
            <div className="forminput">
              <label>No Rekam Medis</label>
              <input
                type="text"
                placeholder="001-100"
                name="no_rekammedis"
                value={a?.no_rekammedis || ''}
              />
            </div>
            <div className="forminput">
              <label>Nama Pasien</label>
              <input
                type="text"
                placeholder="Nama Lengkap"
                name="nama_pasien"
                value={a?.nama_pasien || ''}
              />
            </div>
            <div className="forminput">
              <label>Jenis Kelamin</label>
              <input
                type="text"
                placeholder="Perempuan / Laki-Laki"
                name="jenis_kelamin"
                value={a?.jenis_kelamin || ''}
              />
            </div>
            <div className="forminput">
              <label>Tanggal Pemeriksaan</label>
              <input
                type="date"
                placeholder="MM-DD-YY"
                name="tanggal_pemeriksaan"
                value={a?.tanggal_pemeriksaan || ''}
              />
            </div>
            <div className="forminput">
              <label>No Telepon</label>
              <input
                type="text"
                name="no_telepon"
                placeholder="+62-xxx-xxx-xx"
                value={a?.no_telepon || ''}
              />
            </div>
            <div className="forminput">
              <label>Email</label>
              <input
                type="text"
                name="email"
                placeholder="example@gmail.com"
                value={a?.email || ''}
              />
            </div>
            <div className="forminput">
              <label>Alamat</label>
              <input
                type="text"
                name="alamat"
                placeholder="Jl.xxx No.xx /Rtxx.Rw.xx"
                value={a?.alamat || ''}
              />
            </div>
            <div className="forminput">
              <label>Diagnosa Awal Pasien</label>
              <input
                type="text"
                name="diagnosa_awal"
                placeholder="Diagnosa Penyakit Awal"
                value={a?.diagnosa_awal || ''}
              />
            </div>
            <div className="forminput">
              <label>Diagnosa Sekunder</label>
              <input
                type="text"
                name="diagnosa_sekunder"
                placeholder="Diagnosa Penyakit Lanjutan"
                value={a?.diagnosa_sekunder || ''}
              />
            </div>
            <div className="forminput">
              <label>Riwayat Alergi</label>
              <input
                type="text"
                name="riwayat_alergi"
                placeholder="Alergi Yang Diderita"
                value={a?.riwayat_alergi || ''}
              />
            </div>
            <div className="forminput">
              <label>Hasil Pemeriksaan</label>
              <input
                type="text"
                name="hasil_pemeriksaan"
                placeholder="Hasil Pemeriksaan Akhir"
                value={a?.hasil_pemeriksaan || ''}
              />
            </div>
            <div className="forminput">
              <label>Terapi / Obat Yang Diberikan</label>
              <input
                type="text"
                name="obat"
                placeholder="Obat Yang Diberikan"
                value={a?.obat || ''}
              />
            </div>
            <div className="forminput">
              <label>Tindakan</label>
              <input
                type="text"
                name="tindakan"
                placeholder="Inpatient/Outpatient"
                value={a?.tindakan || ''}
              />
            </div>
            <div className="ttd">
              <label>Dokter Penanggung Jawab </label>
              <input
                className="pgjwb"
                type="text"
                name="pemeriksa"
                value={a?.pemeriksa || ''}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RekamMedis;
