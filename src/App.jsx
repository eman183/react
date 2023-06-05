import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { CartContextProvider } from './Contexts/CartContext'
import { Route, Routes } from 'react-router'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Store from './Pages/Store'



const App=()=>{
    return (
      <>
        <CartContextProvider>
          <Navbar  />
          <Routes >
            <Route path="/" element= {<Home />}/>
            <Route path="login" element={<Login />} />
            <Route path="store" element={<Store />} />
             
          </Routes>
          <Footer />
        </CartContextProvider>
      </>
    );
  }
export default App;