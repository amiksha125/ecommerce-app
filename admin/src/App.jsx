import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import { Routes, Route } from "react-router-dom";

import Add from "./Pages/Add";
import List from "./Pages/List";
import Orders from "./Pages/Orders";
import Login from "./Components/Login";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const backendUrl = import.meta.env.VITE_BACKEND_URL;


const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : "");

  useEffect( () => {
     localStorage.setItem('token', token)
  }, [token]) 

  return (
    <div className="bg-gray-50 min-h-screen">
      <ToastContainer />
      {token === "" ? (
        <Login  setToken = {setToken}/>
      ) : (
        <>
          {/* //above tag means a fragment */}

          <Navbar setToken = {setToken}/>
          <hr />
          <div className="flex w-full">
            <Sidebar />
            {/* Route setup */}
            <div className="w-[70%] ml-[max(5vw, 25px)] mx-auto my-8 text-gray-600 text-base">
              <Routes>
                <Route path="/add" element={<Add token = {token} />} />
                <Route path="/list" element={<List token = {token} />} />
                <Route path="/orders" element={<Orders token = {token}  />} />
              </Routes>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
