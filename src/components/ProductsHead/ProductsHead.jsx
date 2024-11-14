/* eslint-disable react/prop-types */
import populaproducts from "../../data/popularproducts"
import styles from "./productshead.module.css"

const ProductsHead = ({title}) => {
  const product = populaproducts.filter((prod)=>prod.text === title)[0]
  
  return (
    <div id={styles.headContainer}>
       <div>
        <img src={product.path} alt={title} />
       </div>
       <h2>{title}</h2>
    </div>
  )
}

export default ProductsHead
