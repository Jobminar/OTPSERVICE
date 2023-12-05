import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PhoneAuthComponent from "./PhoneAuthComponent";
import EnterOTPComponent from "./EnterOTPComponent";
import HomeComponent from "./HomeComponent"; // Import your HomeComponent

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {" "}
        <Route path="/" element={<PhoneAuthComponent />}></Route>
        <Route path="/enter-otp" element={<EnterOTPComponent />}></Route>
        <Route path="/home" element={<HomeComponent />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
