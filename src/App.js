
import { Routes, Route } from 'react-router-dom';
import { ComingSoon } from './Components/ComingSoon/ComingSoon.jsx';
import Layout from './Components/Layout/Layout.jsx';
import HomePage from './Pages/HomePage.jsx';
import WhyVibePage from './Pages/WhyVibePage.jsx';
import Offerings from './Pages/Offerings.jsx';
import ReadersPage from './Pages/ReadersPage.jsx';
import './App.css';

function App() {
  const readersComingSoonData = {
    heading: 'Check Back Soon!',
    subtext: 'If you\'re interested in being a part of The Vibe Collective team, please submit your resume and cover letter to info@thevibecollective.co. We look forward to hearing from you!',
    backgroundimage: 'jpeg/CHECK_BACK_Readers.jpg'
  };
  
  const storeComingSoonData = {
    heading: 'Check Back Soon!',
    subtext: 'The Vibe Shop will open its doors in Fall 2024! To stay updated on product launches and receive timely notifications, be sure to sign up for our email list.',
    backgroundimage: 'jpeg/CHECK_BACK_store.jpg'
  };
  
  const offeringsComingSoonData = {
    heading: 'Check Back Soon!',
    subtext: 'Offerings are currently unavailable but will open October 2024. To stay informed about updates and receive notifications when bookings become available, please sign up for our email list. Thank you for your patience and future patronage!',
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
          <Route path="/Offerings" element={<Offerings></Offerings>}></Route>
          {/* <Route path="/Readers" element={<ComingSoon comingSoonData={readersComingSoonData} />}></Route>
          <Route path="/Store" element={<ComingSoon comingSoonData={storeComingSoonData} />}></Route>
          <Route path="/Offerings" element={<ComingSoon comingSoonData={offeringsComingSoonData} />}></Route> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
