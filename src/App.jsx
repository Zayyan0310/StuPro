import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Daftar from "./pages/Daftar";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <div className="flex">
          <Sidebar />
          <Home />
        </div>
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/daftar" component={Daftar} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
