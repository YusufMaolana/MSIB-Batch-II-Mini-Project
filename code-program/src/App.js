import Home from './pages/home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DataPasien from './pages/pasien/list-data/DataPasien';
import FormInput from './pages/pasien/new-pasien-data/FormInput';
import FormEdit from './pages/pasien/edit-pasien-data/FormEdit';
import RekamMedis from './pages/pasien/rekam-medis-pasien/RekamMedis';
import DataDokter from './pages/dokter/list-data/DataDokter';
import FormDokter from './pages/dokter/new-pasien-data/FormDokter';

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
              <Route index element={<DataDokter />} />
              <Route path="new" element={<FormDokter />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
