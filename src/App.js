
import { Routes, Route } from 'react-router-dom';
import { ComingSoon } from './Components/ComingSoon/ComingSoon.jsx';
import { SingleOffering } from './Components/OfferingsPage/SingleOffering/SingleOffering.jsx';
import Layout from './Components/Layout/Layout.jsx';
import HomePage from './Pages/HomePage.jsx';
import WhyVibePage from './Pages/WhyVibePage.jsx';
import ReadersPage from './Pages/CollectivePage.jsx';
import OfferingsPage from './Pages/OfferingsPage.jsx';
import './App.css';

function App() {
  const storeComingSoonData = {
    heading: 'Check Back Soon!',
    subtext: 'The Vibe Shop will open its doors in Fall 2024! To stay updated on product launches and receive timely notifications, be sure to sign up for our email list.',
    backgroundimage: 'jpeg/CHECK_BACK_store.jpg'
  };

  const currentVibeComingSoonData = {
    heading: 'Check Back Soon!',
    subtext: 'Introducing The Current Vibe – a dedicated space for energy insights, highlights from The Vibe Shop, thought-provoking articles, practical magic tips, and more! Launching in November 2024, this page will keep you connected and inspired. Sign up for our email list to stay updated and never miss out!',
    backgroundimage: 'jpeg/CHECK_BACK_Offerings.jpg'
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />}></Route>
          <Route path="/WhyVibe" element={<WhyVibePage />}></Route>
          <Route path="/Readers" element={<ReadersPage />}></Route>
          <Route path="/Store" element={<ComingSoon comingSoonData={storeComingSoonData} />}></Route>
          <Route path="/CurrentVibe" element={<ComingSoon comingSoonData={currentVibeComingSoonData} />}></Route>
          <Route path="/Offerings" element={<OfferingsPage />}></Route>
          <Route path="/Offerings/:singleoffering" element={<SingleOffering />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
