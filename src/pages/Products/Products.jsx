import Pageshead from "../../components/Pageshead/Pageshead"
import styles from "./products.module.css"
import popularproducts from "../../data/popularproducts";
import Cards from "../../components/Cards/Cards";
import {Box, InputAdornment, TextField } from "@mui/material";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [products, setProducts] = useState(popularproducts);

  const handleSearchChange = (e)=>{
    setSearchQuery(e.target.value)
    if(e.target.value.length === 0){
      setProducts(()=>popularproducts)
      return;
    }
    setProducts(()=>{
    return popularproducts.filter((prod)=>
        prod.text.toLowerCase().includes(e.target.value.toLowerCase())
      )
    })
  }

  return (
    <div>
      <div id={styles.firstImage}></div>
      <Pageshead text={"Products"}/>
      <div id={styles.searchdiv}>

      <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        mt: 4, // optional margin
      }}
    >
      <TextField
        placeholder="Search For Products"
        variant="outlined"
        sx={{
          width: 400, // adjust width
          '& .MuiOutlinedInput-root': {
            borderRadius: '50px', // rounded edges
            bgcolor: '#EAF2FB', // background color similar to the image
            '& fieldset': {
              borderColor: 'transparent', // no border
            },
            '&:hover fieldset': {
              borderColor: '#A9CCE3', // optional hover effect
            },
          },
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
            <div style={{background: "white", padding: "5px 4px", borderRadius: "50%"}}>
            <FaSearch />
            </div>
            </InputAdornment>
          ),
        }}
        value={searchQuery}
        onChange={handleSearchChange}
      />
    </Box>

        <div id={styles.product_Container}>
        {products.map((prod, index) => {
           return <Link  key={index} to={`/products/${prod.text}`}>
            <Cards path={prod.path} text={prod.text} alt={prod.alt}/>
          </Link>
        })}
        </div>
      </div>
    </div>
  )
}

export default Products
