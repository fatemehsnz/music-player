import React from "react";
import { Routes, Route } from "react-router"
// import Navbar from "./component/Navbar";
import Home from "./component/Home"
import Login from "./component/Login";
import Signup from "./component/Signup";
import Upload from "./component/Upload";


const App = () => (
  <div>
    {/* <Navbar/> */}
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/upload" element={<Upload/>}/>
      {/* <Route path="/:userId/places" element={<Places/>}/> */}
    </Routes>
  </div>
);

export default App;
