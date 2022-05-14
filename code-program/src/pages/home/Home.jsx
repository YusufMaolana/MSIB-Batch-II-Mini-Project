import React, { useEffect, useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Table from '../pasien/table-home-pasien/Table';
import AccessibleOutlinedIcon from '@mui/icons-material/AccessibleOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import './home.scss';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import Calendar from '../../components/widget/calendar/Calendar';
import ReactClock from '../../components/widget/clock/ReactClock';
import { Link } from 'react-router-dom';
import {
  gql,
  useQuery,
  useMutation,
  setLogVerbosity,
  useSubscription,
} from '@apollo/client';
const Hitung = gql`
  subscription MySubscription {
    rekammedis_pasien_aggregate {
      aggregate {
        count(columns: id)
      }
    }
  }
`;
const Home = () => {
  const [a, sa] = useState();
  const { data, loading } = useSubscription(Hitung);
  useEffect(() => {
    if (data) {
      sa(data?.rekammedis_pasien_aggregate.aggregate.count || '');
    }
  }, [data]);
  console.log(a);
  if (loading) {
    return <p>loading</p>;
  } else if (data) {
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
                <p className="count">{a}</p>
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
  }
};

export default Home;
