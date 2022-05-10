import React from 'react';
import './widget.scss';
import ArrowDropUpOutlinedIcon from '@mui/icons-material/ArrowDropUpOutlined';
import AccessibleOutlinedIcon from '@mui/icons-material/AccessibleOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
const Widget = ({ type }) => {
  let data;

  const diff = 100;

  switch (type) {
    case 'pasien':
      data = {
        title: 'PASIEN',
        link: 'Melihat Semua Data Pasien',
        icon: (
          <AccessibleOutlinedIcon
            className="icon"
            style={{
              color: 'crimson',
            }}
          />
        ),
      };
      break;
    case 'dokter':
      data = {
        title: 'DOKTER',
        link: 'Melihat Semua Data Dokter',
        icon: (
          <GroupsOutlinedIcon
            className="icon"
            style={{
              color: 'crimson',
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage min">
          <ArrowDropUpOutlinedIcon />
          {diff} %
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
