import React from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Stats } from "./components/Stats";
import { Features } from "./components/Features";
import { DetailedProcess } from "./components/DetailedProcess";
import { Benefits } from "./components/Benefits";
import { Testimonials } from "./components/Testimonials";
import { FAQ } from "./components/FAQ";
import { Pricing } from "./components/Pricing";
import { Footer } from "./components/Footer";
export function App() {
  return <div className="w-full min-h-screen">
      <Header />
      <div className="pt-16">
        {" "}
        {/* Add padding to account for fixed header */}
        <Hero />
        <Stats />
        <Features />
        <DetailedProcess />
        <Benefits />
        <Testimonials />
        <FAQ />
        <Pricing />
        <Footer />
      </div>
    </div>;
}