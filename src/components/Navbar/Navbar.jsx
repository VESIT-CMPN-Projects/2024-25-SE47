import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import styles from "./Navbar.module.css"
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Navbar = () => {
  return (
    <nav>
        <div id={styles.logo}>
          <img src={logo} alt={"Arasco logo"} />
          <div>
            <span>Arasco</span>
            <span>Export India</span>
            <span>Pvt. Ltd.</span>
          </div>
        </div>
        <ul>
          <Link to={"/"}>
            <li>Home</li>
          </Link>
          <Link to={"/about"}>
            <li>About</li>
          </Link>
          <Link to={"/products"}>
            <li>Products <MdOutlineKeyboardArrowDown className={styles.icon}/></li>
          </Link>
          <Link to={"/certificates"}>
            <li>Certificates</li>
          </Link>
          <Link to={"/testimonials"}>
            <li>Our Customers</li>
          </Link>
          <Link to={"/contacts"}>
            <button>Contact Us</button>
          </Link>
        </ul>
    </nav>
  );
};

export default Navbar;
