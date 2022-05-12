import React, { useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ContactPhoneOutlinedIcon from '@mui/icons-material/ContactPhoneOutlined';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import DateRangeIcon from '@mui/icons-material/DateRange';
import MapsHomeWorkOutlinedIcon from '@mui/icons-material/MapsHomeWorkOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import AccessibleOutlinedIcon from '@mui/icons-material/AccessibleOutlined';
import ReportOutlinedIcon from '@mui/icons-material/ReportOutlined';
import './table.scss';
import { gql, useQuery, useMutation, useSubscription } from '@apollo/client';
import { useState } from 'react';

const getData = gql`
  subscription MySubscription {
    rekammedis_pasien {
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

const List = () => {
  const [datapasien, setDataPasien] = useState();
  const { data: respond, refetch } = useSubscription(getData);
  useEffect(() => {
    if (respond) {
      setDataPasien(respond?.rekammedis_pasien || []);
    } else {
      setDataPasien([]);
    }
  }, [respond]);

  console.log(datapasien);
  return (
    <TableContainer component={Paper} className="table">
      <Table
        sx={{ minWidth: 650 }}
        aria-label="simple table"
        className="tablechild"
      >
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">
              <AccountBoxOutlinedIcon className="icon" />
              No Rekam Medis
            </TableCell>
            <TableCell className="tableCell">
              <BadgeOutlinedIcon className="icon" />
              Nama Pasien
            </TableCell>
            <TableCell className="tableCell">
              <DateRangeIcon className="icon" />
              Jenis Kelamin
            </TableCell>
            <TableCell className="tableCell">
              <ContactPhoneOutlinedIcon className="icon" />
              Hasil Pemeriksaan
            </TableCell>
            <TableCell className="tableCell">
              <ReportOutlinedIcon className="icon" />
              Tindakan
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {datapasien?.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.no_rekammedis}</TableCell>
              <TableCell className="tableCell">{row.nama_pasien}</TableCell>
              <TableCell className="tableCell">{row.jenis_kelamin}</TableCell>
              <TableCell className="tableCell">
                {row.hasil_pemeriksaan}
              </TableCell>
              <TableCell className="tableCell">
                <span className={`tindakan ${row.tindakan}`}>
                  {row.tindakan}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
