import Image from "next/image";
import { FiSettings } from "react-icons/fi";
import { TypingText } from "./components/CustomTexts";
import Navbar from "./components/sections/Navbar";
import Hero from "./components/sections/Hero";
import MarqueSlide from "./components/sections/MarqueSlide";
export default function Home() {
  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-cover bg-no-repeat bg-center">
      <Navbar />
      <Hero />
      <MarqueSlide />
      </div>
    </div>
  );
}
