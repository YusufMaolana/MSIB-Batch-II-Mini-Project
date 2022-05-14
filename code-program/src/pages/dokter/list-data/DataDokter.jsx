import Navbar from '../../../components/navbar/Navbar';
import Sidebar from '../../../components/sidebar/Sidebar';
import React, { useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BadgeIcon from '@mui/icons-material/Badge';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import WcIcon from '@mui/icons-material/Wc';
import ReportIcon from '@mui/icons-material/Report';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AssignmentLateIcon from '@mui/icons-material/AssignmentLate';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import './datadokter.scss';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import { gql, useMutation, useSubscription } from '@apollo/client';
import { useState } from 'react';
import { Link } from 'react-router-dom';

// const getData = gql`
//   subscription MySubscription {
//     rekammedis_pasien {
//       alamat
//       diagnosa_awal
//       diagnosa_sekunder
//       email
//       hasil_pemeriksaan
//       id
//       jenis_kelamin
//       nama_pasien
//       no_rekammedis
//       no_telepon
//       obat
//       riwayat_alergi
//       tanggal_pemeriksaan
//       tindakan
//     }
//   }
// `;

// const DeleteData = gql`
//   mutation MyMutation($_eq: Int!) {
//     delete_rekammedis_pasien(where: { id: { _eq: $_eq } }) {
//       affected_rows
//     }
//   }
// `;

const Dokter = () => {
  const [datapasien, setDataPasien] = useState();
  // const { data: respond, refetch } = useSubscription(getData);
  // const [deletepasien, { loading: respondloading }] = useMutation(DeleteData, {
  //   refetchQueries: [getData],
  // });

  // useEffect(() => {
  //   if (respond) {
  //     setDataPasien(respond?.rekammedis_pasien || []);
  //   }
  // }, [respond]);

  // Search Data

  // const [searchInput, setSearchInput] = useState('');

  // const [dataFilterPasien, SetFilterPasien] = useState([]);

  // const handleChange = (e) => {
  //   setSearchInput(e.target.value);
  // };

  // const handleClick = () => {
  //   SetFilterPasien(
  //     filterPasien({
  //       dataPasien: data,
  //       searchInput: searchInput,
  //       toTable: true,
  //     })
  //   );
  // };

  // useEffect(() => {
  //   handleClick();
  // }, [data, searchInput]);

  return (
    <div className="datadokter">
      <Sidebar />
      <div className="datadokterContainer">
        <Navbar />
        <div className="titleTopDokter">Dokter Data</div>
        <div className="titleTableDokter">
          <Link to="/dokter/new" style={{ textDecoration: 'none' }}>
            <div className="btndata">+ New Data</div>
          </Link>
        </div>
        <div className="listContainer">
          <div className="search">
            <input type="text" placeholder="Search..." />
            <TravelExploreIcon className="icon" />
          </div>
          <TableContainer component={Paper} className="table">
            <Table
              sx={{ minWidth: 650 }}
              aria-label="simple table"
              className="tablechild"
            >
              <TableHead>
                <TableRow>
                  <TableCell className="tableCell">
                    <BadgeIcon className="icon" />
                    No Induk Pegawai
                  </TableCell>
                  <TableCell className="tableCell">
                    <AccountCircleIcon className="icon" />
                    Nama Dokter
                  </TableCell>
                  <TableCell className="tableCell">
                    <WcIcon className="icon" />
                    Jenis Kelamin
                  </TableCell>
                  <TableCell className="tableCell">
                    <LibraryBooksIcon className="icon" />
                    Pendidikan Terakhir
                  </TableCell>
                  <TableCell className="tableCell">
                    <ReportIcon className="icon" />
                    Status
                  </TableCell>
                  <TableCell className="tableCell">
                    <SettingsIcon className="icon" />
                    Action
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {datapasien?.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell className="tableCell">
                      {row.no_rekammedis}
                    </TableCell>
                    <TableCell className="tableCell">
                      {row.nama_pasien}
                    </TableCell>
                    <TableCell className="tableCell">
                      {row.jenis_kelamin}
                    </TableCell>
                    <TableCell className="tableCell">
                      {row.hasil_pemeriksaan}
                    </TableCell>
                    <TableCell className="tableCell">
                      <span className={`tindakan ${row.tindakan}`}>
                        {row.tindakan}
                      </span>
                    </TableCell>
                    <TableCell className="tableCell">
                      <div className="cellAction">
                        <Link to={`edit/${row.id}`}>
                          <div className="tombolEdit">
                            <SaveAsIcon />
                          </div>
                        </Link>
                        <div
                          className="tombolHapus"
                          onClick={() => {
                            // deletepasien({
                            //   variables: { _eq: row.id },
                            // });
                          }}
                        >
                          <DeleteForeverIcon />
                        </div>
                        <div className="tombolInfo">
                          <Link to={`medis/${row.id}`}>
                            <div className="tombolInfo">
                              <AssignmentLateIcon />
                            </div>
                          </Link>
                        </div>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
};

export default Dokter;
