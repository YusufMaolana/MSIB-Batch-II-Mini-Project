import Home from './pages/home/Home';
import DataPasien from './pages/pasien/list-data/DataPasien';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import FormEdit from './pages/pasien/edit-pasien-data/FormEdit';
import FormInput from './pages/pasien/new-pasien-data/FormInput';
import FormEdit from './pages/pasien/edit-pasien-data/FormEdit';
import RekamMedis from './pages/pasien/rekam-medis-pasien/RekamMedis';
// import RekamMedis from './pages/pasien/rekam-medis-pasien/RekamMedis';

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
              {/* <Route path="edit" element={<FormEdit />} /> */}
              <Route path="edit/:id" element={<FormEdit />} />
              <Route path="medis/:id" element={<RekamMedis />} />
            </Route>
            <Route path="dokter">
              {/* <Route index element={<List1 />} />
              <Route path="new" element={<New1 />} /> */}
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
