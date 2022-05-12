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
import ContactPhoneOutlinedIcon from '@mui/icons-material/ContactPhoneOutlined';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import DateRangeIcon from '@mui/icons-material/DateRange';
import MapsHomeWorkOutlinedIcon from '@mui/icons-material/MapsHomeWorkOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import AccessibleOutlinedIcon from '@mui/icons-material/AccessibleOutlined';
import ReportOutlinedIcon from '@mui/icons-material/ReportOutlined';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AssignmentLateIcon from '@mui/icons-material/AssignmentLate';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import './datapasien.scss';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import {
  gql,
  useQuery,
  useMutation,
  setLogVerbosity,
  useSubscription,
} from '@apollo/client';
import { useState } from 'react';
import { Link } from 'react-router-dom';

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

// const editData = gql`
//   query MyQuery($_eq: Int!) {
//     rekammedis_pasien(where: { id: { _eq: $_eq } }) {
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

const DeleteData = gql`
  mutation MyMutation($_eq: Int!) {
    delete_rekammedis_pasien(where: { id: { _eq: $_eq } }) {
      affected_rows
    }
  }
`;

const Home = () => {
  const [datapasien, setDataPasien] = useState();
  const { data: respond, refetch } = useSubscription(getData);
  const [deletepasien, { loading: respondloading }] = useMutation(DeleteData, {
    refetchQueries: [getData],
  });

  useEffect(() => {
    if (respond) {
      setDataPasien(respond?.rekammedis_pasien || []);
    }
  }, [respond]);

  return (
    <div className="datapasien">
      <Sidebar />
      <div className="datapasienContainer">
        <Navbar />
        <div className="titleTop">Pasien Data</div>
        <div className="titleTable">
          <Link to="/pasien/new" style={{ textDecoration: 'none' }}>
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
                  <TableCell className="tableCell">Action</TableCell>
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
                            deletepasien({
                              variables: { _eq: row.id },
                            });
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

export default Home;
