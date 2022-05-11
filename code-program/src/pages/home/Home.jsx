import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Table from '../pasien/table/Table';
import AccessibleOutlinedIcon from '@mui/icons-material/AccessibleOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import './home.scss';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import Calendar from '../../components/widget/calendar/Calendar';
import ReactClock from '../../components/widget/clock/ReactClock';

import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="titleTop">Dasboard</div>
        <div className="widgets">
          <div className="right">
            <Link to="/pasien" style={{ textDecoration: 'none' }}>
              <AccessibleOutlinedIcon className="icon" />
            </Link>
            <div className="titleicon">
              <p className="pasien">Pasien</p>
              <p className="count">80</p>
            </div>
          </div>
          <div className="left">
            <Link to="/dokter" style={{ textDecoration: 'none' }}>
              <GroupsOutlinedIcon className="icon" />
            </Link>
            <div className="titleicon">
              <p className="dokter">Dokter</p>
              <p className="count">10</p>
            </div>
          </div>
        </div>
        <div className="titleTable">
          <h1>Table Data Pasien</h1>
        </div>
        <div className="listContainer">
          <div className="search">
            <input type="text" placeholder="Search..." />
            <TravelExploreIcon className="icon" />
          </div>
          <Table />
        </div>
        <div className="information">
          <Calendar className="calendar" />
          <ReactClock className="clock" />
        </div>
      </div>
    </div>
  );
};

export default Home;
