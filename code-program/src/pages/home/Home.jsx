import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Widget from '../../components/widget/Widget';
import Table from '../pasien/table/Table';
import './home.scss';

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="pasien" />
          <Widget type="dokter" />
        </div>
        <div className="titleTop">
          <h1>Table Data Pasien</h1>
        </div>
        <div className="listContainer">
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;
