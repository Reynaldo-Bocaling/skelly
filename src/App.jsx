import React, { useEffect, useState } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import CircularIntro from "./components/CircularIntro";
import Hero2 from "./components/Hero2";
import HowToBuy from "./components/HowToBuy";
import Social from "./components/Social";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5100);

    return () => clearTimeout(timer);
  }, []);
  if (isLoading) {
    return <CircularIntro />;
  }
  return (
    <div className="relative overflow-hidden">
      <Hero />
      <About />
      <HowToBuy />
      <Social />
    </div>
  );
};

export default App;
