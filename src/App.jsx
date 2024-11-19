

import React from 'react'
import { Routes, Route } from 'react-router-dom'

import './App.css'
import LandingPage from './stores/pages/LandingPage'
import MobilePage from './stores/pages/MobilePage'
import ComputerPage from './stores/pages/ComputerPage'
import WatchPage from './stores/pages/WatchPage'
import MenPage from './stores/pages/MenPage'
import WomanPage from './stores/pages/WomanPage'
import FruniturePage from './stores/pages/FruniturePage'
import KitchenPage from './stores/pages/KitchenPage'
import FridgePage from './stores/pages/FridgePage'
import BooksPage from './stores/pages/BooksPage'
import SpeakersPage from './stores/pages/SpeakersPage'
import TVPage from './stores/pages/TVPage'
import AcPage from './stores/pages/ACPage'
import ProMobile from './stores/pages/ProMobile'
import MobileProduct from './singleProduct/MobileProduct'
import ComputerProduct from './singleProduct/ComputerProduct'
import WatchProduct from './singleProduct/WatchProduct'
import MenProduct from './singleProduct/MenProduct'
import WomanProduct from './singleProduct/WomanProduct'
import FrunitureProduct from './singleProduct/FrunitureProduct'
import KitchenProduct from './singleProduct/KitchenProduct'
import FridgeProduct from './singleProduct/FridgeProduct'
import BooksProduct from './singleProduct/BooksProduct'
import SpeakerProduct from './singleProduct/SpeakerProduct'
import TvsProduct from './singleProduct/TvsProduct'
import AcsProduct from './singleProduct/AcsProduct'
import ProMobileProduct from './singleProduct/ProMobileProduct'
import UserCart from './stores/UserCart'




const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/mobiles" element={<MobilePage />}></Route>
        <Route path="/computers" element={<ComputerPage />}></Route>
        <Route path="/watches" element={<WatchPage />}></Route>
        <Route path="/mens" element={<MenPage />}></Route>
        <Route path="/woman" element={<WomanPage />}></Route>
        <Route path="/furniture" element={<FruniturePage />}></Route>
        <Route path="/kitchen" element={<KitchenPage />}></Route>
        <Route path="/fridge" element={<FridgePage />}></Route>
        <Route path="/books" element={<BooksPage />}></Route>
        <Route path="/speakers" element={<SpeakersPage />}></Route>
        <Route path="/tv" element={<TVPage />}></Route>
        <Route path="/ac" element={<AcPage />}></Route>
        <Route path="/pros" element={<ProMobile />}></Route>

        <Route path="/mobiles/:id" element={<MobileProduct />}></Route>
        <Route path="/computers/:id" element={<ComputerProduct />}></Route>
        <Route path="/watches/:id" element={<WatchProduct />}></Route>
        <Route path="/mens/:id" element={<MenProduct />}></Route>
        <Route path="/womans/:id" element={<WomanProduct />}></Route>
        <Route path="/frunitures/:id" element={<FrunitureProduct />}></Route>
        <Route path="/kitchens/:id" element={<KitchenProduct />}></Route>
        <Route path="/fridges/:id" element={<FridgeProduct />}></Route>
        <Route path="/books/:id" element={<BooksProduct />}></Route>
        <Route path="/speakers/:id" element={<SpeakerProduct />}></Route>
        <Route path="/tvs/:id" element={<TvsProduct />}></Route>
        <Route path="/acs/:id" element={<AcsProduct />}></Route>
        <Route path="/pros/:id" element={<ProMobileProduct />}></Route>
        <Route path="/cart" element={<UserCart />}></Route>
      </Routes>
    </div>
  );
}

export default App