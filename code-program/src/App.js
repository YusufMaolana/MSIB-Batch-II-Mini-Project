import Home from './pages/home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DataPasien from './pages/pasien/list-data/DataPasien';
import FormInput from './pages/pasien/new-pasien-data/FormInput';
import FormEdit from './pages/pasien/edit-pasien-data/FormEdit';
import RekamMedis from './pages/pasien/rekam-medis-pasien/RekamMedis';
import Dokter from './pages/dokter/list-data/Dokter';
import FormDokter from './pages/dokter/new-dokter-data/FormDokter';
import EditDokter from './pages/dokter/edit-dokter-data/EditDokter';
import Information from './pages/dokter/dokter-information/Information';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="pasien">
              <Route index element={<DataPasien />} />
              <Route path="new" element={<FormInput />} />
              <Route path="edit/:id" element={<FormEdit />} />
              <Route path="medis/:id" element={<RekamMedis />} />
            </Route>
            <Route path="dokter">
              <Route index element={<Dokter />} />
              <Route path="new" element={<FormDokter />} />
              <Route path="edit/:id" element={<EditDokter />} />
              <Route path="info/:id" element={<Information />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
