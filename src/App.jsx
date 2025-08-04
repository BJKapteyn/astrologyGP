
import { Routes, Route } from 'react-router-dom';
import { SingleItemView } from './Components/PageElements/SingleItemView/SingleItemView.jsx';
// import { SingleItem } from './Components/PageElements/SingleItem/SingleItem.jsx';
import { ItemListByCategory } from './Components/PageElements/ItemListByCategory/ItemListByCategory.jsx';
import { ProductTypes } from './Enums/ProductTypes.js';
import { CreateBlogForm } from './Components/EditPage/CreateBlogForm/CreateBlogForm.tsx';
import { EditBlog } from './Components/EditPage/EditBlog/EditBlog.tsx';
import Layout from './Components/Layout/Layout.jsx';
import HomePage from './Pages/HomePage.jsx';
import WhyVibePage from './Pages/WhyVibePage.jsx';
import CollectivePage from './Pages/CollectivePage.jsx';
import OfferingsPage from './Pages/OfferingsPage.jsx';
import StorePage from './Pages/StorePage.jsx';
import EventCalendarPage from './Pages/EventCalendarPage.jsx';
import CurrentVibePage from './Pages/CurrentVibePage.jsx';
import EditPage from './Pages/EditPage.tsx';
import { Login } from './Components/Login/Login.tsx';
import './App.scss';

function App() {

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
          <Route path="/EventCalendar" element={<EventCalendarPage />}></Route>
          <Route path="/Offerings" element={<OfferingsPage />}></Route>
          <Route path="/Offerings/:offering" element={<ItemListByCategory productType={ProductTypes.AppointmentsService} />}></Route>
          <Route path="/Offerings/:offering/:singleoffering" element={<SingleItemView isService={true} hasVariation={true} />}></Route>
          <Route path="/CurrentVibe" element={<CurrentVibePage />}></Route>
          <Route path="/admin" element={<Login />}></Route>
        </Route>
        <Route path="edit">
          <Route index element={<EditPage />}></Route>
          <Route path="editBlog" element={<EditBlog />}></Route>
          <Route path="editBlog/:blogId" element={<CreateBlogForm />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
