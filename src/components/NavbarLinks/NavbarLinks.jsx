/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import styles from "../Navbar/Navbar.module.css"

const NavbarLinks = ({burger, setActive, active}) => {

  const onClickBurgerMenu = ()=>{
    if(burger){
    setActive(!active)
    }
  }
  return (
    <ul>
    <Link to={"/"} onClick={onClickBurgerMenu}>
      <li>Home</li>
    </Link>
    <Link to={"/about"} onClick={onClickBurgerMenu}>
      <li>About</li>
    </Link>
    <div>
    <select name="productId" id="product">
    <option value="">
    <Link to={"/products"} onClick={onClickBurgerMenu}>
      <li>Products <MdOutlineKeyboardArrowDown className={styles.icon}/></li>
    </Link>
    </option>
      <option value="Grain">Grain</option>
      <option value="Spices">Spices</option>
      <option value="Fruits">Fruits</option>
      <option value="Lentils">Lentils</option>
      <option value="Pulses">Pulses</option>
    </select>
    </div>
    <Link to={"/certificates"} onClick={onClickBurgerMenu}>
      <li>Certificates</li>
    </Link>
    <Link to={"/testimonials"} onClick={onClickBurgerMenu}>
      <li>Our Customers</li>
    </Link>
    <Link to={"/contacts"} onClick={onClickBurgerMenu}>
      <button>Contact Us</button>
    </Link>
  </ul>
  )
}

export default NavbarLinks
