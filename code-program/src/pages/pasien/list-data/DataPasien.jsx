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
import { gql, useQuery, useMutation, setLogVerbosity } from '@apollo/client';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const getData = gql`
  query MyQuery {
    rekammedis_pasien {
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

const Home = () => {
  const [datapasien, setDataPasien] = useState();
  const { data: respond, refetch } = useQuery(getData);
  useEffect(() => {
    if (respond) {
      setDataPasien(respond?.rekammedis_pasien || []);
    } else {
      setDataPasien([]);
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
                  <TableCell className="tableCell">ID Pasien</TableCell>
                  <TableCell className="tableCell">Nama Pasien</TableCell>
                  <TableCell className="tableCell">
                    Tanggal Pemeriksaaan
                  </TableCell>
                  <TableCell className="tableCell">No Telepon</TableCell>
                  <TableCell className="tableCell">Alamat</TableCell>
                  <TableCell className="tableCell">Diagnosa</TableCell>
                  <TableCell className="tableCell">Tindakan</TableCell>
                  <TableCell className="tableCell">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {datapasien?.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell className="tableCell">{row.id}</TableCell>
                    <TableCell className="tableCell">
                      {row.nama_pasien}
                    </TableCell>
                    <TableCell className="tableCell">
                      {row.tanggal_pemeriksaan}
                    </TableCell>
                    <TableCell className="tableCell">
                      {row.no_telepon}
                    </TableCell>
                    <TableCell className="tableCell">{row.alamat}</TableCell>
                    <TableCell className="tableCell">{row.diagnosa}</TableCell>
                    <TableCell className="tableCell">
                      <span className={`tindakan ${row.tindakan}`}>
                        {row.tindakan}
                      </span>
                    </TableCell>
                    <TableCell className="tableCell">
                      <div className="cellAction">
                        <div className="tombolEdit">
                          <SaveAsIcon />
                        </div>
                        <div className="tombolHapus">
                          <DeleteForeverIcon />
                        </div>
                        <div className="tombolInfo">
                          <AssignmentLateIcon />
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
