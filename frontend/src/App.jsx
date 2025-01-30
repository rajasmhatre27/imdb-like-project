import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signin from './components/authentication/Signin';
import Signup from './components/authentication/Signup';
import Navbar from './components/Navbar/Navbar';
import Home from './components/pages/Home';
import Moviedetail from './components/pages/Moviedetail';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        
        <Route index element={<Home/> }></Route>
        <Route path="/movie/:id" element={<h2>Movie Id</h2>}></Route>
        <Route path="/movies/:type" element={<h2>Movie type</h2>}></Route>
        <Route path="/" element={<h2>Error page</h2>}></Route>
        <Route path="/movie/:id" element={<Moviedetail/>} /> 
        {/* <Route path="/signup" element={<Signup/>} />
        <Route path="/signin" element={<Signin/>} /> */}
      </Routes>
    </Router>
  );
};

export default App;
