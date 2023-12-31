import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import App from './App.jsx'
import ErrorScreen from './screens/ErrorScreen.jsx'
import HomeScreen from './screens/HomeScreen.jsx'
import AboutScreen from './screens/AboutScreen.jsx'
import ReviewScreen from './screens/ReviewScreen.jsx'
import ReviewListScreen from './screens/ReviewListScreen.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.scss'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<ErrorScreen />} >
      <Route index={true} path='/' element={<ReviewListScreen />} />
      <Route path='/about' element={<AboutScreen />} />
      <Route path='/reviews' element={<ReviewListScreen />} />
      <Route path='/reviews/:reviewId' element={<ReviewScreen />} />
      <Route path="*" element={<ErrorScreen />} />
    </Route>,
  ),
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
