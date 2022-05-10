import React from 'react';
import { Link } from 'react-router-dom';
import './datatable.scss';
import { DataGrid } from '@mui/x-data-grid';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AssignmentLateIcon from '@mui/icons-material/AssignmentLate';
import AddIcon from '@mui/icons-material/Add';
import { userColumns, userRows } from '../../../datatablesourceforpasien';

const Datatable = () => {
  const actionColumn = [
    {
      field: 'action',
      headerName: 'Action',
      width: 100,
      renderCell: () => {
        return (
          <div className="cellAction">
            <div className="tombolEdit">
              <AssignmentLateIcon />
            </div>
            <div className="tombolHapus">
              <DeleteForeverIcon />
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="btntambahPasien">
        <Link to="/pasien/new" className="link">
          <AddIcon className="icon" />
          Data Baru
        </Link>
      </div>
      <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        className="tableGrid"
      />
    </div>
  );
};

export default Datatable;
