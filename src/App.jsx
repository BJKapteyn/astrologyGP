
import { Routes, Route } from 'react-router-dom';
import { SingleItem } from './Components/PageElements/SingleItem/SingleItem.jsx';
import { ItemListByCategory } from './Components/PageElements/ItemListByCategory/ItemListByCategory.jsx';
import { ProductTypes } from './Enums/ProductTypes.js';
import Layout from './Components/Layout/Layout.jsx';
import HomePage from './Pages/HomePage.jsx';
import WhyVibePage from './Pages/WhyVibePage.jsx';
import CollectivePage from './Pages/CollectivePage.jsx';
import OfferingsPage from './Pages/OfferingsPage.jsx';
import StorePage from './Pages/StorePage.jsx';
import CurrentVibePage from './Pages/CurrentVibePage.jsx';
import { Login } from './Components/Login/Login.tsx';
import './App.css';
import { Edit } from './Components/EditPage/Edit.tsx';

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
          <Route path="/Store/:storecategory/:storeitem" element={<SingleItem />}></Route>
          <Route path="/Offerings" element={<OfferingsPage />}></Route>
          <Route path="/Offerings/:offering" element={<ItemListByCategory productType={ProductTypes.AppointmentsService} />}></Route>
          <Route path="/Offerings/:offering/:singleoffering" element={<SingleItem isService={true} hasVariation={true} />}></Route>
          <Route path="/CurrentVibe" element={<CurrentVibePage />}></Route>
          <Route path="/admin" element={<Login />}></Route>
          <Route path="/edit" element={<Edit />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
