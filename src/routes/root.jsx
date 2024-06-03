import { Outlet } from "react-router-dom";
// import Footer from "../pages/Footer/Footer";
import { useEffect, useState } from "react";
import Header from "../components/navbar/header";
// import { IoArrowUpCircleSharp } from 'react-icons/io5';

export default function Root() {
//   const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 400;
      setShowScrollButton(scrollPosition > scrollThreshold);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
    <div>
      <Header />
      <div className="content">
        <Outlet />
      </div>
      {/* <Footer /> */}
      {/* {showScrollButton && (
        <div className="scroll-to-top" onClick={scrollToTop}>
          <IoArrowUpCircleSharp className='scroll-icon' />
        </div>
      )} */}
      </div>
    </>
  );
}