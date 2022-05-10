export const userColumns = [
  { field: 'id', headerName: 'ID', width: 50 },
  { field: 'namadokter', headerName: 'Nama Dokter', width: 150 },
  {
    field: 'tglbergabung',
    headerName: 'Tanggal bergabung',
    width: 160,
  },
  {
    field: 'notelepon',
    headerName: 'No Telepon',
    width: 140,
  },
  {
    field: 'alamat',
    headerName: 'Alamat',
    width: 200,
  },
  {
    field: 'jabatan',
    headerName: 'Jabatan',
    width: 160,
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 100,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

export const userRows = [
  {
    id: 1,
    namadokter: 'Dr.Ricard Agustian',
    tglbergabung: '13 Maret 2017',
    notelepon: '+62-231-444-112',
    alamat: 'Jl.Kemajuan Tenggara No.10',
    jabatan: 'Dokter Spesialis Anak',
    status: 'Present',
  },
  {
    id: 2,
    namadokter: 'Dr.Rachel Katanegoro',
    tglbergabung: '12 Agustus 2019',
    notelepon: '+62-111-2223-22',
    alamat: 'Jl.Otto Iskandar No.13',
    jabatan: 'Dokter Umum',
    status: 'Absent',
  },
];
