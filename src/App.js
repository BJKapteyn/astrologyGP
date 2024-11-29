
import { Routes, Route } from 'react-router-dom';
import { ComingSoon } from './Components/ComingSoon/ComingSoon.jsx';
import { CategorizedOfferings } from './Components/OfferingsPage/CategorySection/CategorizedOfferings.jsx';
import { SingleItem } from './Components/PageElements/SingleItem/SingleItem.jsx';
import Layout from './Components/Layout/Layout.jsx';
import HomePage from './Pages/HomePage.jsx';
import WhyVibePage from './Pages/WhyVibePage.jsx';
import CollectivePage from './Pages/CollectivePage.jsx';
import OfferingsPage from './Pages/OfferingsPage.jsx';
import StorePage from './Pages/StorePage.jsx';
import './App.css';
import { StoreCategories } from './Components/StorePage/StoreCategories/StoreCategories.jsx';

function App() {
  // const storeComingSoonData = {
  //   heading: 'Check Back Soon!',
  //   subtext: 'The Vibe Shop will open its doors in Fall 2024! To stay updated on product launches and receive timely notifications, be sure to sign up for our email list.',
  //   backgroundimage: 'jpeg/CHECK_BACK_store.jpg'
  // };

  const currentVibeComingSoonData = {
    heading: 'Check Back Soon!',
    subtext: 'Introducing The Current Vibe – a dedicated space for energy insights, highlights from The Vibe Shop, thought-provoking articles, practical magic tips, and more! Launching in November 2024, this page will keep you connected and inspired. Sign up for our email list to stay updated and never miss out!',
    backgroundimage: 'jpeg/CHECK_BACK_Offerings.jpg'
  };

  localStorage.clear();

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />}></Route>
          <Route path="/WhyVibe" element={<WhyVibePage />}></Route>
          <Route path="/TheCollective" element={<CollectivePage />}></Route>
          <Route path="/Store" element={<StorePage />}></Route>
          <Route path="/Store/:storecategory" element={<StoreCategories />}></Route>
          <Route path="/Store/:storecategory/:storeitem" element={<SingleOffering />}></Route>
          <Route path="/CurrentVibe" element={<ComingSoon comingSoonData={currentVibeComingSoonData} />}></Route>
          <Route path="/Offerings" element={<OfferingsPage />}></Route>
          <Route path="/Offerings/:offering" element={<CategorizedOfferings />}></Route>
          <Route path="/Offerings/:offering/:singleoffering" element={<SingleItem needsVariation={true} />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
