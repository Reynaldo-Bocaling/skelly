import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Loading from "./Loading";

const CircularIntro = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="intro-container bg-[#000000]">
      <motion.div
        className="circle"
        initial={{ scale: 0 }}
        animate={{ scale: 20 }}
        transition={{ duration: 1 }}
      />
    </div>
  );
};

export default CircularIntro;
