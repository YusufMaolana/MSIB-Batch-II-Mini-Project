export const filterDokter = ({ dataDokter, searchInput }) => {
  const filterAllDokter = dataDokter.filter((dokter) => {
    if (dokter.nama_dokter.toLowerCase().includes(searchInput.toLowerCase())) {
      return true;
    } else if (searchInput === ' ' || searchInput === 0) {
      return true;
    }
    return false;
  });
  return filterAllDokter;
};
