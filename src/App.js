import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/Header';

import Home from './components/Home';
import Anime from './components/Anime';

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
         <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/anime/:mal_id" element={<Anime />} />
         </Routes>
       </BrowserRouter>
    </>
  );
}

export default App;
