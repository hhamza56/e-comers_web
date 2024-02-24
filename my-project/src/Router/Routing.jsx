// import React from 'react'
// import {
//     createBrowserRouter,
//     createRoutesFromElements,
//     Route,
//     RouterProvider,
//     Routes,
// } from "react-router-dom";
// import { Singin } from "../Pages/Singin";
// import { Singup } from "../Pages/Singup";




// function Routing() {
//     const router = createBrowserRouter(
//         createRoutesFromElements(
//             <Routes>
//                 <Route path='/' element={<Singin/>} />
//                 <Route path='singup' element={<Singup />} />

//             </Routes>

//         )
//     )

//     return (<RouterProvider router={router} />)
// }

// export  {Routing}






import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Update import

import { Singin } from '../Pages/Singin';
import { Singup } from '../Pages/Singup';
import { Home } from './Web_pages/Home';

function Routing() {
  return (
    <Router> 
      <Routes>
        <Route path="/singin" element={<Singin />} /> 
        <Route path="singup" element={<Singup />} /> {/* Correct path to '/singup' */}
        <Route path='Home' element={<Home/>}/>
      </Routes>
    </Router>
  );
}

export  {Routing}; // Export default component





