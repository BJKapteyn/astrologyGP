
import { Routes, Route } from 'react-router-dom';
import { SingleItemView } from './Components/PageElements/SingleItemView/SingleItemView.jsx';
import { ItemListByCategory } from './Components/PageElements/ItemListByCategory/ItemListByCategory.jsx';
import { ProductTypes } from './Enums/ProductTypes.js';
import { EditBlogForm } from './Components/EditPage/EditBlogForm/EditBlogForm.tsx';
import { EditBlog } from './Components/EditPage/EditBlog/EditBlog.tsx';
import { Login } from './Components/Login/Login.tsx';
import { AuthenticationGuard } from './Components/Login/Auth0/AuthGuard.jsx';
import { ComingSoon } from 'Components/ComingSoon/ComingSoon.jsx';
import { SingleBlogPost } from 'Components/CurrentVibePage/SingleBlogPost/SingleBlogPost';
import Layout from './Components/Layout/Layout.jsx';
import HomePage from './Pages/HomePage.jsx';
import WhyVibePage from './Pages/WhyVibePage.jsx';
import PrivacyPolicyPage from './Pages/PrivacyPolicyPage.tsx';
import CollectivePage from './Pages/CollectivePage.jsx';
import OfferingsPage from './Pages/OfferingsPage.jsx';
import StorePage from './Pages/StorePage.jsx';
import CurrentVibePage from './Pages/CurrentVibePage.jsx';
import EditPage from './Pages/EditPage.tsx';
import './App.scss';

function App() {

 const eventCalendarComingSoonData = {
    heading: 'Check Back Soon!',
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
          <Route path="/EventCalendar" element={<ComingSoon comingSoonData={eventCalendarComingSoonData} />}></Route>
          <Route path="/Offerings" element={<OfferingsPage />}></Route>
          <Route path="/Offerings/:offering" element={<ItemListByCategory productType={ProductTypes.AppointmentsService} />}></Route>
          <Route path="/Offerings/:offering/:singleoffering" element={<SingleItemView isService={true} hasVariation={true} />}></Route>
          <Route path="/CurrentVibe" element={<CurrentVibePage />}></Route>
          <Route path="/CurrentVibe/:blogId/:partKey" element={<SingleBlogPost />}></Route>
          <Route path="/admin" element={<Login />}></Route>
          <Route path="/PrivacyPolicy" element={<PrivacyPolicyPage />}></Route>
        </Route>
        <Route path="edit">
          <Route index element={<AuthenticationGuard component={EditPage} />}></Route>
          <Route path="editBlog" element={<AuthenticationGuard component={EditBlog} />}></Route>
          <Route path="editBlog/:blogId" element={<AuthenticationGuard component={EditBlogForm} />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
