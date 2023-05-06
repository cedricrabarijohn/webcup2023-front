import Footer from "../Footer";
import Header from "../Header";
import dynamic from "next/dynamic";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const CustomCursor = dynamic(
  () => {
    return import("../CustomCursor");
  },
  { ssr: false }
);
export default function Layout({ headerVariant, children }) {
  useEffect(() => {
    AOS.init();
  }, []);
  
  return (
    <>
      <Header variant={headerVariant} />
      <CustomCursor />
      {children}
      <Footer />
    </>
  );
}
