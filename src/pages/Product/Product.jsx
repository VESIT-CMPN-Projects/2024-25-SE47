import { useParams } from "react-router-dom"
import Pageshead from "../../components/Pageshead/Pageshead"
import ProductsHead from "../../components/ProductsHead/ProductsHead"

const Product = () => {
 const {product} = useParams()
  return (
    <div>
      <Pageshead text={'Products'}/>
      <ProductsHead title={product}/>
    </div>
  )
}

export default Product
