import Home from './pages/home/Home';
import List from './pages/pasien/list-data/List';
import New from './pages/pasien/new/New';
// import List1 from './pages/dokter/list-data/List1';
// import New1 from './pages/dokter/new/New1';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="pasien">
              <Route index element={<List />} />
              <Route path="new" element={<New />} />
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
