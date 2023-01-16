import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import AllItemsPage from './pages/all-items-page';
import LearnPage from './pages/learn-page';
import ShopPage from './pages/shop-page';
import { WineItemInterface, MainContextInterface } from './types/main-types';
import MainContext from './context/main-context';
import './styles/index.css';

const App: React.FC = () => {
  const [items, setItems] = useState<WineItemInterface[] | []>([]);

  const states: MainContextInterface = {
    items, setItems
  }

  return (
    <div className="main">
      <MainContext.Provider value={states}>

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AllItemsPage />} />
            <Route path="learn/:id" element={<LearnPage />} />
            <Route path="shop/:id" element={<ShopPage />} />
          </Routes>

        </BrowserRouter>
      </MainContext.Provider>

    </div>
  );
}

export default App;
