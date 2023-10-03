import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './components/Home'
import Login from './components/Login'

import Page1 from './components/Page1'
import Page2 from './components/Page2'
import Page3 from './components/Page3'
import Page4 from './components/Page4'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/page1' element={<Page1 />}></Route>
          <Route path='/page2' element={<Page2 />}></Route>
          <Route path='/page3' element={<Page3 />}></Route>
          <Route path='/page4' element={<Page4 />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
