import React from 'react'
import About from '../components/About'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Recent from '../components/Recent'
import Recommend from '../components/Recommend'
import Share from '../components/Share'
import { useState,useEffect } from 'react'
const { GoogleSpreadsheet } = require("google-spreadsheet");

const Landing = ({ className }: { className: string }) => {
  


  return (
    <div className={className}>
      <Navbar />
      <Hero />
      <Recommend />
      <Recent />
      <Share />
      <About />
      <Footer />
    </div>
  )
}

export default Landing
