import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter, createRoutesFromElements, Route,
  RouterProvider,

} from "react-router-dom";
import Resume from './component/Resume.jsx';
import Banner from './component/Banner.jsx';
import About from "./component/About"
import Contact from './component/Contact.jsx';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='/' element={<Banner />} />
      <Route path='/about' element={<About />} />

      <Route path='/resume' element={<Resume />} />
      <Route path='/contact' element={<Contact />} />



    </Route>

  ))

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
  </>,
)
