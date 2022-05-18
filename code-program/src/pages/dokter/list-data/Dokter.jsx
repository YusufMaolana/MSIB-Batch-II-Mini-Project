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
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import WcIcon from '@mui/icons-material/Wc';
import ReportIcon from '@mui/icons-material/Report';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AssignmentLateIcon from '@mui/icons-material/AssignmentLate';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import Loading from '../../../components/loading-page/Loading';
import './dokter.scss';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import { gql, useMutation, useSubscription } from '@apollo/client';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { filterDokter } from '../../../filterDokter';

const getData = gql`
  subscription MySubscription {
    rekammedis_dokter {
      alamat
      email
      id
      jenis_kelamin
      nama_dokter
      no_induk
      no_telepon
      pendidikan_pertama
      pendidikan_lanjutan
      gelar
      status
      tanggal_bergabung
    }
  }
`;

const DeleteData = gql`
  mutation MyMutation($_eq: Int!) {
    delete_rekammedis_dokter(where: { id: { _eq: $_eq } }) {
      affected_rows
    }
  }
`;

const Home = () => {
  const [datadokter, setDataDokter] = useState();
  const { data: respond, loading: loadingdatadokter } =
    useSubscription(getData);
  const [deletedokter, { loading: respondloading }] = useMutation(DeleteData, {
    refetchQueries: [getData],
  });

  useEffect(() => {
    if (respond) {
      setDataDokter(respond?.rekammedis_dokter || []);
    }
  }, [respond]);

  // Search Data

  const [searchInput, setSearchInput] = useState('');

  const [dataFilterDokter, SetFilterDokter] = useState([]);

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleClick = () => {
    SetFilterDokter(
      filterDokter({
        dataDokter: datadokter || [],
        searchInput: searchInput || ' ',
      })
    );
  };

  useEffect(() => {
    handleClick();
  }, [datadokter, searchInput]);

  if (loadingdatadokter) {
    return <Loading />;
  } else if (respond) {
    return (
      <div className="datadokter">
        <Sidebar />
        <div className="datadokterContainer">
          <Navbar />
          <div className="titleTop">Dokter Data</div>
          <div className="titleTable">
            <Link to="/dokter/new" style={{ textDecoration: 'none' }}>
              <div className="btndata">+ New Data</div>
            </Link>
          </div>
          <div className="listContainer">
            <div className="search">
              <input
                type="text"
                placeholder="Search..."
                onChange={handleChange}
              />
              <TravelExploreIcon className="icon" onClick={handleClick} />
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
                      <ContactPhoneIcon className="icon" />
                      No Telepon
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
                  {dataFilterDokter?.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell className="tableCell">
                        {row.no_induk}
                      </TableCell>
                      <TableCell className="tableCell">
                        {row.nama_dokter}
                      </TableCell>
                      <TableCell className="tableCell">
                        {row.jenis_kelamin}
                      </TableCell>
                      <TableCell className="tableCell">
                        {row.no_telepon}
                      </TableCell>
                      <TableCell className="tableCell">
                        <span className={`status ${row.status}`}>
                          {row.status}
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
                              deletedokter({
                                variables: { _eq: row.id },
                              });
                            }}
                          >
                            <DeleteForeverIcon />
                          </div>
                          <div className="tombolInfo">
                            <Link to={`info/${row.id}`}>
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
  }
};

export default Home;
