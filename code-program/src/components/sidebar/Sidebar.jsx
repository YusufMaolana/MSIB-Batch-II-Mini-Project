import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.scss';
import HomeIcon from '@mui/icons-material/Home';
import AccessibleOutlinedIcon from '@mui/icons-material/AccessibleOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo1">M</span>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <span className="logo">Record</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <HomeIcon className="icon" />
            <Link to="/" style={{ textDecoration: 'none' }}>
              <span>Dasboard</span>
            </Link>
          </li>
          <p className="title">LIST</p>
          <li>
            <AccessibleOutlinedIcon className="icon" />
            <Link to="/pasien" style={{ textDecoration: 'none' }}>
              <span>Pasien</span>
            </Link>
          </li>
          <li>
            <GroupsOutlinedIcon className="icon" />
            <Link to="/dokter" style={{ textDecoration: 'none' }}>
              <span>Dokter</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
