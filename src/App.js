import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Home from "./Components/Home";
import Monthly from "./Components/Monthly";
import Weekly from "./Components/Weekly";
import Yearly from "./Components/Yearly";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/weekly' element={<Weekly/>}/>
        <Route path='/monthly' element={<Monthly/>}/>
        <Route path='/yearly' element={<Yearly/>}/>
      </Routes>
    </>
  );
}

export default App;
