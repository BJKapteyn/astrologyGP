
import { Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout/Layout.jsx';
import ReadersPage from './Pages/ReadersPage.jsx'
import HomePage from './Pages/HomePage.jsx';
import NewsPage from './Pages/NewsPage.jsx';
import WhyVibePage from './Pages/WhyVibePage.jsx';
import Offerings from './Pages/Offerings.jsx';
import './App.css';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />}></Route>
          <Route path="/Readers" element={<ReadersPage />}></Route>
          <Route path="/News" element={<NewsPage />}></Route>
          <Route path="/WhyVibe" element={<WhyVibePage />}></Route>
          <Route path="/Offerings" element={<Offerings url={"http://localhost:7186/api/getitems"} />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
