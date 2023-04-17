import React from "react";
import { Routes, Route } from "react-router"
// import Navbar from "./component/Navbar";
import Home from "./component/Home"


const App = () => (
  <div>
    {/* <Navbar/> */}
    
    <Routes>
      <Route path="/" element={<Home/>}/>
      {/* <Route path="/users" element={<Users/>}/>
      <Route path="/:userId/places" element={<Places/>}/>
      <Route path="/places" element={<Places/>}/>
      <Route path="/my-place" element={<MyPlaces/>}/> */}
    </Routes>
  </div>
);

export default App;
