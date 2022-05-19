import React, { useEffect, useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Table from '../pasien/table-home-pasien/Table';
import AccessibleOutlinedIcon from '@mui/icons-material/AccessibleOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import './home.scss';
import Calendar from '../../components/widget/calendar/Calendar';
import ReactClock from '../../components/widget/clock/ReactClock';
import Loading from '../../components/loading/Loading';
import { Link } from 'react-router-dom';
import {
  gql,
  useQuery,
  useMutation,
  setLogVerbosity,
  useSubscription,
} from '@apollo/client';
const HitungPasien = gql`
  subscription MySubscription {
    rekammedis_pasien_aggregate {
      aggregate {
        count(columns: id)
      }
    }
  }
`;

const HitungDokter = gql`
  subscription MySubscription {
    rekammedis_dokter_aggregate {
      aggregate {
        count(columns: id)
      }
    }
  }
`;
const Home = () => {
  const [a, sa] = useState();
  const [b, sb] = useState();
  const { data, loading } = useSubscription(HitungPasien);
  const { data: datadokter, loading: loadingdokter } =
    useSubscription(HitungDokter);
  useEffect(() => {
    if (data || datadokter) {
      sa(data?.rekammedis_pasien_aggregate.aggregate.count || '');
      sb(datadokter?.rekammedis_dokter_aggregate.aggregate.count || '');
    }
  }, [data, datadokter]);
  console.log(a);
  if (loading || loadingdokter) {
    return <Loading />;
  } else if (data || datadokter) {
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
                <div className="pasien">Pasien</div>
                <div className="count">{a}</div>
              </div>
            </div>
            <div className="left">
              <Link to="/dokter" style={{ textDecoration: 'none' }}>
                <GroupsOutlinedIcon className="icon" />
              </Link>
              <div className="titleicon">
                <div className="dokter"> Dokter</div>
                <div className="count">{b}</div>
              </div>
            </div>
          </div>
          <div className="listContainer">
            <Table />
          </div>
          <div className="widgetsbawah">
            <Calendar className="calendar" />
            <ReactClock className="clock" />
          </div>
        </div>
      </div>
    );
  }
};

export default Home;
