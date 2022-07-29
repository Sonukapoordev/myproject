import React from 'react'
import Registration from  './registration/registration'
import Login from  './login/login'
import Card from './home/card'
import Navbar from './home/navbar';
import UseeffactAPI from './home/useeffactAPI';
import Alluser from './home/alluser';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
const App = () => {
  return (
    <>
  {/* <Registration /> */}
  <Navbar />
  <Router>
    <Routes>
      <Route  path="/" element={<Card />}></Route>
      <Route  path="/registration" element={<Registration />}></Route>
      <Route exact path="/login" element={<Login />}></Route>
      <Route  path="/users" element={<UseeffactAPI />}></Route>
      <Route path="/alluser" element={<Alluser />}></Route>
    </Routes>
  </Router>
 
     
    </>
  )
}

export default App