import React from 'react';
import Navbar from '../../../components/navbar/Navbar';
import Sidebar from '../../../components/sidebar/Sidebar';
import './list.scss';
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
import AddIcon from '@mui/icons-material/Add';
import { gql, useQuery, useMutation } from '@apollo/client';
import { useState, useEffect } from 'react';
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

const List = () => {
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
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <div className="datatable">
          <div className="btntambahPasien">
            <Link to="/pasien/new" className="link">
              <AddIcon className="icon" />
              Data Baru
            </Link>
          </div>
          <TableContainer component={Paper} className="table">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell className="tableCell">
                    <AccountBoxOutlinedIcon className="icon" />
                    ID Pasien
                  </TableCell>
                  <TableCell className="tableCell">
                    <BadgeOutlinedIcon className="icon" />
                    Nama Pasien
                  </TableCell>
                  <TableCell className="tableCell">
                    <DateRangeIcon className="icon" />
                    Tanggal Pemeriksaaan
                  </TableCell>
                  <TableCell className="tableCell">
                    <ContactPhoneOutlinedIcon className="icon" />
                    No Telepon
                  </TableCell>
                  <TableCell className="tableCell">
                    <MapsHomeWorkOutlinedIcon className="icon" />
                    Alamat
                  </TableCell>
                  <TableCell className="tableCell">
                    <AccessibleOutlinedIcon className="icon" />
                    Diagnosa
                  </TableCell>
                  <TableCell className="tableCell">
                    <ReportOutlinedIcon className="icon" />
                    Tindakan
                  </TableCell>
                  <TableCell className="tableCell">
                    <ReportOutlinedIcon className="icon" />
                    Aksi
                  </TableCell>
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
                          <AssignmentLateIcon />
                        </div>
                        <div className="tombolHapus">
                          <DeleteForeverIcon />
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

export default List;
