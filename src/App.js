
import { Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout/Layout.jsx';
import ReadersPage from './Pages/ReadersPage.jsx'
import HomePage from './Pages/HomePage.jsx';
import NewsPage from './Pages/NewsPage.jsx';
import './App.css';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />}></Route>
          <Route path="/Readers" element={<ReadersPage />}></Route>
          <Route path="/News" element={<NewsPage />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
