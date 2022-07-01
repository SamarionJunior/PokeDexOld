import React from "react";
import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import Painel from './pages/Painel'
import Home from './pages/Home';

export default function App() {

  return (
    <div className="App">
      <Provider store={store}>
        <Routes>
          <Route path="painel" element={<Painel />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Provider>
    </div>
  );
}