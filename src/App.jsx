import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './home/Home';
import Courses from './courses/Courses';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Contact from './components/Contact';

function App() {
  return (
    <div className='dark:bg-slate-900 dark:text-white'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Courses />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Login />
      <Contact />
    </div>
  );
}

export default App;
