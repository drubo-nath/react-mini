import React from 'react'
import ReactDOM from 'react-dom/client'
import { Router, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Github from './components/Github/Github.jsx'
import Route from './Route.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Route />,
    children: [{ 
        path: "",
        element: <Home/>
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "contact",
        element: <Contact />
      }
   ]
  }
])

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element = {<Route  />} >
//       <Route path='' element = {<Home />}/>
//       <Route path='about' element = {<About />}/>
//       <Route path='contact' element = {<Contact />}/>
//       <Route path='github' element = {<Github />}/>
//     </Route>
//   )
// )
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
