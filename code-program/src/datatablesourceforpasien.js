export const userColumns = [
  { field: 'id', headerName: 'ID', width: 50 },
  { field: 'namapasien', headerName: 'Nama Pasien', width: 130 },
  {
    field: 'tglpemeriksaan',
    headerName: 'Tanggal Pemeriksaan',
    width: 170,
  },
  {
    field: 'notelepon',
    headerName: 'No Telepon',
    width: 140,
  },
  {
    field: 'alamat',
    headerName: 'Alamat',
    width: 190,
  },
  {
    field: 'diagnosa',
    headerName: 'Diagnosa Penyakit',
    width: 160,
  },
  {
    field: 'tindakan',
    headerName: 'Tindakan',
    width: 100,
    renderCell: (params) => {
      return (
        <div className={`cellWithTindakan ${params.row.tindakan}`}>
          {params.row.tindakan}
        </div>
      );
    },
  },
];

export const userRows = [
  {
    id: 1,
    namapasien: 'Teresa Cristhoper',
    tglpemeriksaan: '13 Maret 2020',
    notelepon: '+62-333-2222-11',
    alamat: 'Jl.Betis Pagar No.20',
    diagnosa: 'Tifus',
    tindakan: 'Inpatient',
  },
  {
    id: 2,
    namapasien: 'Sheli Ramyond',
    tglpemeriksaan: '12 Agustus 2020',
    notelepon: '+62-111-2223-22',
    alamat: 'Jl.Merbabu Selatan No.30',
    diagnosa: 'Flu Dan Batuk',
    tindakan: 'Outpatient',
  },
];
