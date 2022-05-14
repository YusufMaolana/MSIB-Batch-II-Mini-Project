export const filterPasien = ({ dataPasien, searchInput }) => {
  const filterAllPasien = dataPasien.filter((pasien) => {
    if (pasien.nama_pasien.toLowerCase().includes(searchInput.toLowerCase())) {
      return true;
    } else if (searchInput === ' ' || searchInput === 0) {
      return true;
    }
    return false;
  });
  return filterAllPasien;
};
