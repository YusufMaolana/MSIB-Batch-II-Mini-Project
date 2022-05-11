import Home from './pages/home/Home';
import DataPasien from './pages/pasien/list-data/DataPasien';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NewPasien from './pages/pasien/new-data/NewPasien';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="pasien">
              <Route index element={<DataPasien />} />
              <Route path="new" element={<NewPasien />} />
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
