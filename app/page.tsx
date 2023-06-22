
'use client';

import Navbar from "./components/sections/Navbar";
import Hero from "./components/sections/Hero";
import MarqueSlide from "./components/sections/MarqueSlide";
import Steps from "./components/sections/Steps";
import FAQs from "./components/sections/FAQs";
import Clients from "./components/sections/Clients";
import Footer from "./components/sections/Footer";
import Contact from "./components/Contact";
import { FloatingWhatsApp } from 'react-floating-whatsapp'

export default function Home() {
  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
        <MarqueSlide />
        <Steps />
        <FAQs />
        <Clients />
        <Footer/>
        <FloatingWhatsApp avatar="/rpe-logo.png" chatMessage="Hello there 😊! How can we help?"  statusMessage="Typically replies within 15 minutes" phoneNumber="+2348132206437" accountName="RightPlug Exchange" />
        {/* <Contact /> */}
      </div>
    </div>
  );
}
