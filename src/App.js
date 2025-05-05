
import { Routes, Route } from 'react-router-dom';
import { ComingSoon } from './Components/ComingSoon/ComingSoon.jsx';
import { SingleItemView } from './Components/PageElements/SingleItemView/SingleItemView.jsx';
import { ItemListByCategory } from './Components/PageElements/ItemListByCategory/ItemListByCategory.jsx';
import { ProductTypes } from './Enums/ProductTypes.js';
import Layout from './Components/Layout/Layout.jsx';
import HomePage from './Pages/HomePage.jsx';
import WhyVibePage from './Pages/WhyVibePage.jsx';
import CollectivePage from './Pages/CollectivePage.jsx';
import OfferingsPage from './Pages/OfferingsPage.jsx';
import StorePage from './Pages/StorePage.jsx';
import EventCalendarPage from './Pages/EventCalendarPage.jsx';
import './App.scss';

function App() {

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
          <Route path="/TheCollective" element={<CollectivePage />}></Route>
          <Route path="/Store" element={<StorePage />}></Route>
          <Route path="/Store/:storecategory" element={<ItemListByCategory />}></Route>
          <Route path="/Store/:storecategory/:storeitem" element={<SingleItemView  />}></Route>
          <Route path="/CurrentVibe" element={<ComingSoon comingSoonData={currentVibeComingSoonData} />}></Route>
          <Route path="/EventCalendar" element={<EventCalendarPage />}></Route>
          <Route path="/Offerings" element={<OfferingsPage />}></Route>
          <Route path="/Offerings/:offering" element={<ItemListByCategory productType={ProductTypes.AppointmentsService} />}></Route>
          <Route path="/Offerings/:offering/:singleoffering" element={<SingleItemView isService={true} hasVariation={true} />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
