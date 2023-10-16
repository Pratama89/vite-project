import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import LoginPage from './Pages/login.jsx';
import RegisterPage from './Pages/register.jsx';
import ErrorPage from './Pages/404.jsx';
import ProductsPage from './Pages/products';
import ProfilePage from './Pages/profile';
import DetailProductPage from './Pages/detailProduct';
import { Provider } from 'react-redux';
import store from './redux/store';
import Navbar from './components/Layouts/Navbar';
import DarkModeContextProvider from './context/DarkMode';
import { TotalPriceProvider } from './context/TotalPriceContext';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div className='text-center mt-5 text-5xl font-bold '>Hello Pharmadent</div>,
    errorElement: <ErrorPage />
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/register",
    element: <RegisterPage />
  },
  {
    path: "/products",
    element: <ProductsPage />
  },
  {
    path: "/profile",
    element: <ProfilePage />
  },
  {
    path: "/products/:id",
    element: <DetailProductPage />
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <Navbar /> */}
      <DarkModeContextProvider>
        <TotalPriceProvider>
          <RouterProvider router={router} />
        </TotalPriceProvider>
      </DarkModeContextProvider>
    </Provider>
  </React.StrictMode>,
)
