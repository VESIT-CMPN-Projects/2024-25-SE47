/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";

const NavbarLinks = ({ burger, setActive, active }) => {

  const [dropdown, setDropdown] = useState(false);
  const open = dropdown

  const onClickBurgerMenu = () => {
    if (burger) {
      setActive(!active);
    }
  };

  const handleClick = (e)=>{
    setDropdown(e.currentTarget)
    onClickBurgerMenu();
  }

  const handleClose = ()=>{
    setDropdown(null);
  }

  const menustyle = {
    "borderBottom": "1px solid inherit",
    "color": 'inherit'
  }

  return (
    <ul>
      <Link to={"/"} onClick={onClickBurgerMenu}>
        <li>Home</li>
      </Link>
      <Link to={"/about"} onClick={onClickBurgerMenu}>
        <li>About</li>
      </Link>
      <IconButton
        color="inherit"
        aria-label="more"
        aria-controls={open? 'menu': undefined}
        aria-haspopup="true"
        onClick={handleClick}
        sx={{fontSize: "1rem"}}
      >
        <Link to="/products">Products</Link><MdArrowDropDown />
      </IconButton>

      {/* Dropdown */}

        <Menu 
          anchorEl={dropdown}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'more-button',
          }}>
          <MenuItem onClick={handleClose} to={"/products"} sx={menustyle}>Grain</MenuItem>
          <MenuItem onClick={handleClose} to={"/products"} sx={menustyle}>Spices</MenuItem>
          <MenuItem onClick={handleClose} to={"/products"} sx={menustyle}>Lentils</MenuItem>
          <MenuItem onClick={handleClose} to={"/products"} sx={menustyle}>Fruits</MenuItem>
          <MenuItem onClick={handleClose} to={"/products"} sx={menustyle}>Pulses</MenuItem>
        </Menu>
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
  );
};

export default NavbarLinks;
