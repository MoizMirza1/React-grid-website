// Home.js
import React, { useState } from 'react';
import Layout from '../Components/Layout';
import Banner from '../Components/Banner.js';
import About from '../Components/About.js';
import Featured from '../Components/Featured.js';
import Audience from '../Components/Audience.js';
import Counter from '../Components/Counter.js';
import User from '../Components/User.js';
import Testimonials from '../Components/testimonails.js';
import Footer from '../Components/Footer.js';

const Home = () => {
  const [backgroundImage, setBackgroundImage] = useState('url("https://images.unsplash.com/photo-1707343844152-6d33a0bb32c3?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")');

  return (

      <div className='relative min-h-screen'>
       
        <Banner />
        <About />
        <Audience />
        <Featured />
        <Testimonials />
        <User />
        <Counter />
       
      </div>
  
  );
};

export default Home;
