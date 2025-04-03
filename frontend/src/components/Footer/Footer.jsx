import { Link } from "react-router-dom"
import { BiMap, BiSolidPhone } from "react-icons/bi";
import { FiMail } from "react-icons/fi";
import styles from "./footer.module.css"

const Footer = () => {
  return (
    <footer>
      <div className={styles.container}>
        <div>
          <div className={styles.head}>Information</div>
          <ul>
          <Link to={"/"}>
            <li>Home</li>
          </Link>
          <Link to={"/about"}>
            <li>About</li>
          </Link>
          <Link to={"/products"}>
            <li>Products</li>
          </Link>
          <Link to={"/certificates"}>
            <li>Certificates</li>
          </Link>
          {/* <Link to={"/testimonials"}>
            <li>Our Customers</li>
          </Link> */}
          <Link to={"/contacts"}>
            <li>Contact Us</li>
          </Link>
          <Link to={"/contacts"}>
            <li>Join Now</li>
          </Link>
          </ul>
        </div>
        <div>
          <div className={styles.head}>Products</div>
          <ul>
          <Link to={"/products/Rice"}>
            <li>Rice</li>
          </Link>
          <Link to={"/products/Spices"}>
            <li>Spices</li>
          </Link>
          <Link to={"/products/Pulses"}>
            <li>Pulses</li>
          </Link>
          <Link to={"/products/Oils"}>
            <li>Oils</li>
          </Link>
          <Link to={"/products/Fruits"}>
            <li>Fruits</li>
          </Link>
          <Link to={"/products/Tea"}>
            <li>Tea</li>
          </Link>
          </ul>
        </div>
        <div>
          <div className={styles.head} id={styles.contact}>Stay Engaged</div>
          <div>
            <BiMap  className={styles.icon}/>
            <span>Address: Unit No. 11, Ground Floor Tribhuvan Complex, Ishwar Nagar New Delhi-110065 (India)</span>
          </div>
          <div>
            <BiSolidPhone className={styles.icon} />
            <span>Phone no: +91 97170 46215</span>
          </div>
          <div>
            <FiMail className={styles.icon} />
            <span>Email: arascoexportindi@gmai.com</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
