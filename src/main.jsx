import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import About from './Components/About/About.jsx'
import Home from './Components/Home/Home.jsx'
import {  RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Contact from './Components/Contact/Contact'
import User from './Components/User/User'
import Github, { GithubInfoLoader } from './Components/Github/Github'
// const router=createBrowserRouter([
//   {
//     path:"/",
//     element:<Layout />,
//    children:[
//     {
//       path:"",
//       element:<Home />
//     },
//     {
//       path:"about",
//       element:<About />
//     },
//     {
//       path:"contact",
//       element:<Contact />
//     }
//    ]
//   }
// ])
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} >
      <Route path="" element={<Home />} />
      <Route path="contact" element={<Contact />} />
      <Route path="about" element={<About />} />
      <Route path='user/:userid' element={<User />} />
      <Route
      loader={GithubInfoLoader}
      path='github' element={<Github />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
