import logo from "../../assets/logo.png";
import styles from "./Navbar.module.css";
import NavbarLinks from "../NavbarLinks/NavbarLinks";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";

const Navbar = () => {
  const [active, SetActive] = useState(false)
  return (
    <>
      <nav id={styles.normalnav}>
        <div id={styles.logo}>
          <img src={logo} alt={"Arasco logo"} />
          <div>
            <span>Arasco</span>
            <span>Export India</span>
            <span>Pvt. Ltd.</span>
          </div>
        </div>
        <NavbarLinks burger={false} setActive={SetActive} active={active}/>
      </nav>
      <nav id={styles.burgerMenu}>
        <div id={styles.logo}>
          <img src={logo} alt={"Arasco logo"} />
          <div>
            <span>Arasco</span>
            <span>Export India</span>
            <span>Pvt. Ltd.</span>
          </div>
        </div>
        <div className={styles.navicons}>
        <GiHamburgerMenu onClick={()=>SetActive(!active)}/>
        </div>
        <div  className={`${styles.linkContainer} ${active ? styles.linkContainerActive : ''}`}>
          <NavbarLinks burger={true} setActive={SetActive} active={active}/>
          <div className={styles.navicons} id={styles.cross}>
          <IoCloseSharp onClick={()=>SetActive(!active)}/>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
