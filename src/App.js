import React, { useState, useEffect } from 'react';
import LoadingSpinner from './Components/LoadingSpinner'

import CompanyInfo from "./Components/CompanyInfo";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Testimonials from "./Components/Testimonials";
import ContactUs from './Components/Contact';


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
  return (
    <div className="">
      {
      loading ? <LoadingSpinner /> : 
      <div>
        <Navbar/>
        <Header/>
        <CompanyInfo/>
        <Testimonials/>
        <ContactUs/>
        <Footer/>
      </div>
      }
    </div>
  );
}

export default App;
