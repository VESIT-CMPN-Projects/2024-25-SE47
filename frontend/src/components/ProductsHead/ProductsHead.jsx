/* eslint-disable react/prop-types */
import populaproducts from "../../data/popularproducts"
import styles from "./productshead.module.css"

const ProductsHead = ({title}) => {
  const product = populaproducts.filter((prod)=>prod.text === title)[0]
  
  return (
    <div id={styles.headContainer}>
       <div id={styles.image} style={{backgroundImage: `url(${product.image})`,backgroundPosition: "center center", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
       </div>
       <h2>{title}</h2>
    </div>
  )
}

export default ProductsHead
