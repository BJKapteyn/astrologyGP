
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import ScrollToTop from './ScrollToTop.jsx';
import ReadersPage from './Pages/ReadersPage.jsx'
import Layout from './Components/Layout/Layout.jsx';
import HomePage from './Pages/HomePage.jsx';
import NewsPage from './Pages/NewsPage.jsx';
import './App.css';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
          <ScrollToTop>
        <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />}></Route>
              <Route path="/Readers" element={<ReadersPage />}></Route>
              <Route path="/News" element={<NewsPage />}></Route>
            </Route>
        </Routes>
          </ScrollToTop>
      </BrowserRouter>
    </div>
  );
}

export default App;
