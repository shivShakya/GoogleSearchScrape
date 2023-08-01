import './App.css';
import Get1Url from './Component/GetScraped/Get1Url';
import Get2Url from './Component/GetScraped/Get2Url';
import Get3Url from './Component/GetScraped/Get3Url';
import Get4Url from './Component/GetScraped/Get4Url';
import Get5Url from './Component/GetScraped/Get5Url';
import QueryPage from './Component/QueryPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <QueryPage />
        <Routes>
          <Route path="/firstUrl" element={<Get1Url />} />
          <Route path="/secUrl" element={<Get2Url />} />
          <Route path="/thirdUrl" element={<Get3Url />} />
          <Route path="/forthUrl" element={<Get4Url />} />
          <Route path="/fifthUrl" element={<Get5Url />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
