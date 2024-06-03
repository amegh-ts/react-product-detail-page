import { useState, useEffect } from "react";
import { menuData } from "../../data/menuData";
import MenuItems from "./menuItems";

const Navbar = () => {
  // State to track if the screen size is small
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const depthLevel = 0;

  useEffect(() => {
    // Function to handle resize events
    const handleResize = () => {
      // Update state based on window width
      setIsSmallScreen(window.innerWidth <= 960); // Change 960 to your desired breakpoint
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Initial check for screen size
    handleResize();

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="desktop-nav">
      <ul className="menus">
        {menuData.map((menu, index) => (
          // Render MenuItems component for each menu item in menuData
          <MenuItems items={menu} key={index} depthLevel={depthLevel} />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
