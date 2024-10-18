import Pageshead from "../../components/Pageshead/Pageshead"
import styles from "./products.module.css"
import { FaSearch } from "react-icons/fa";


const Products = () => {
  return (
    <div>
      <div id={styles.firstImage}></div>
      <Pageshead text={"Products"}/>
      <div id={styles.searchdiv}>
        <input placeholder="  Search Product" type="text" name="search" id="search" />
        <FaSearch id={styles.searchicon}/>
      </div>
    </div>
  )
}

export default Products
