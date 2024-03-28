import React from "react";
import Navbar from "./components/Navbar";
import { updatedData } from "./school_data";
import SchoolCard from "./components/SchoolCard";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-black font-monsterrat">
      <div className="max-w-7xl mx-auto min-h-screen bg-black">
        <Navbar />
        <div className="grid grid-cols-1 mx-4 items-stretch justify-center gap-7 md:grid-cols-2 lg:grid-cols-3">
          {updatedData.map((info, index) => (
            <SchoolCard
              key={index}
              name={info.name}
              imageUrl={info.imageUrl}
              desc={info.desc}
              permalink={info.permalink}
            />
          ))}
        </div>
        <Footer/>
      </div>
    </div>
  );
}
