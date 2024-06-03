import { Link } from "react-router-dom";
import Navbar from "./navbar.jsx";
// import MobileNav from "./MobileNav";

const Header = () => {
    return (
        <header>
            <div className="nav-area">
                <Link to="/" className="logo" style={{ textDecoration: 'none', }}>
                    <span className="title">
                        {/* <img src="logoTransp.png" alt=""/> */}
                        <h1>Logo</h1>
                    </span>
                </Link>
                <div className="nav-right">
                    {/* for large screens */}
                    <Navbar />
                    {/* for small screens */}
                    {/* <MobileNav /> */}
                </div>
                {/* <span></span> */}
                <div className="nav-button">
                    {/* <button className="G-btn ">Order Now</button> */}
                    <button>Contact Us</button>
                </div>
            </div>
        </header>
    );
};

export default Header;
