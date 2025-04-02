
import { Link } from "react-router-dom";
import "./Ecommerce.css"; 
import StarRating from "../components/StarRating";

import brownRice from "../assets/rice/brownrice.png";
import goldenRice from "../assets/rice/goldenrice.png";
import masooririce from "../assets/rice/masooririce.png";
import steambasmatirice from "../assets/rice/steambasmatirice.png";
import steamrice from "../assets/rice/steamrice.png";
import whiterice from "../assets/rice/whiterice.png";
import cinnamon from "../assets/spices/cinnamon.png";
import turmeric from "../assets/spices/turmuric.png";
import driedredchilli from "../assets/spices/driedredchilli.png";
import driedredkashmirichilli from "../assets/spices/driedredkashmirichilli.png";
import corrianderseeds from "../assets/spices/corrianderseeds.png";
import blackpepper from "../assets/spices/blackpepper.png";
import nutmeg from "../assets/spices/nutmeg.png";
import greencardamom from "../assets/spices/greencardamom.png";
import drycloves from "../assets/spices/drycloves.png";
import turmericpowder from "../assets/powders/turmericpowder.png";
import corianderpowder from "../assets/powders/corianderpowder.png";
import cuminpowder from "../assets/powders/cuminpowder.png";
import garlicpowder from "../assets/powders/garlicpowder.png";
import onionpowder from "../assets/powders/onionpowder.png";
import guargumpowder from "../assets/powders/guargumpowder.png";
import potatoflakes from "../assets/powders/potatoflakes.png";
import coconutpowder from "../assets/powders/coconutpowder.png";
import greencoconut from "../assets/fruits/greencoconut.png";
import rawcoconut from "../assets/fruits/rawcoconut.png";
import chickpeas from "../assets/pulses/chickpeas.png";
import uraddaal from "../assets/pulses/uraddaal.png";
import poultryfeeds from "../assets/pulses/poultryfeeds.png";
import greengram from "../assets/pulses/greengram.png";
import pigeonpeas from "../assets/pulses/pigeonpeas.png";
import kidneybeans from "../assets/pulses/kidneybeans.png";
import whitesugar from "../assets/sugar/whitesugar.png";
import rawbrownsugar from "../assets/sugar/rawbrownsugar.png";
import jaggery from "../assets/sugar/jaggery.png";
import coconutoil from "../assets/oils/coconutoil.png";
import groundnutoil from "../assets/oils/groundnutoil.png";
import mustardoil from "../assets/oils/mustardoil.png";
import oliveoil from "../assets/oils/oliveoil.png";
import palmoil from "../assets/oils/palmoil.png";
import tea from "../assets/tea/tea.png";
import greentea from "../assets/tea/greentea.png";

const Products = [
  {
    id:"brown-rice",
    image: brownRice,
    text: "Brown Rice",
    rating: "5",
    
  },
  {
    id:"golden-rice",
    image: goldenRice,
    text: "Golden Rice",
    rating: "3.6"
  },
  {
    id:"masoori-rice",
    image: masooririce,
    text: "Masoori Rice",
    rating: "4.7"
  },
  {

    id:"steam-basmati-rice",
    image: steambasmatirice,
    text: "Steam Basmati Rice",
    rating: "5"
  },
  {
    id:"steam-rice",
    image: steamrice,
    text: "Steam Rice",
    rating: "5"
  },
  {
    id:"white-rice",
    image: whiterice,
    text: "White Rice",
    rating: "4.4"
  },
  {
    id:"cinnamon",
    image: cinnamon,
    text: "Cinnamon Stick",
    rating: "3.5"
  },
  {
    id:"turmeric",
    image: turmeric,
    text: "Indian Turmeric Finger",
    rating: "4.9"
  },
  {
    id:"dried-red-chilli",
    image: driedredchilli,
    text: "Dried Red Long Chilli With Stem",
    rating: "4.3"
  },
  {
    id:"dried-kashmiri-red-chilli",
    image: driedredkashmirichilli,
    text: "Dried Kashmiri Red Chilli",
    rating: "3.6"
  },
  {
    id:"coriander-seeds",
    image: corrianderseeds,
    text: "Coriander Seeds",
    rating: "5"
  },
  {
    id:"black-pepper",
    image: blackpepper,
    text: "Indian Black Pepper",
    rating: "4.2"
  },
  {
    id:"brown-rice",
    image: nutmeg,
    text: "Nutmeg Seeds",
    rating: "3"
  },
  {
    id:"brown-rice",
    image: greencardamom,
    text: "Indian Green Cardamom",
    rating: "3.6"
  },
  {
    id:"brown-rice",
    image: drycloves,
    text: "Dry Cloves",
    rating: "4.5"
  },
  {
    id:"brown-rice",
    image: turmericpowder,
    text: "Turmeric Powder",
    rating: "5"
  },
  {
    id:"brown-rice",
    image: corianderpowder,
    text: "Coriander Powder",
    rating: "5"
  },
  {
    id:"brown-rice",
    image: cuminpowder,
    text: "Cumin Powder",
    rating: "5"
  },
  {
    id:"brown-rice",
    image: garlicpowder,
    text: "Garlic Powder",
    rating: "5"
  },
  {
    id:"brown-rice",
    image: onionpowder,
    text: "Onion Powder",
    rating: "5"
  },
  {
    id:"brown-rice",
    image: guargumpowder,
    text: "Guar Gum Powder",
    rating: "5"
  },
  {
    id:"brown-rice",
    image: potatoflakes,
    text: "Potato Flakes",
    rating: "5"
  },
  {
    id:"brown-rice",
    image: coconutpowder,
    text: "Coconut Powder",
    rating: "5"
  },
  {
    id:"brown-rice",
    image: rawcoconut,
    text: "Raw Coconut",
    rating: "5"
  },
  {
    id:"brown-rice",
    image: greencoconut,
    text: "Green Coconut",
    rating: "5"
  },
  {
    id:"brown-rice",
    image: chickpeas,
    text: "Chickpeas"
  },
  {
    id:"brown-rice",
    image: greengram,
    text: "Green Gram",
    rating: "5"
  },
  {
    id:"brown-rice",
    image: uraddaal,
    text: "Urad Dal",
    rating: "5"
  },
  {
    id:"brown-rice",
    image: pigeonpeas,
    text: "Pigeon Peas",
    rating: "5"
  },
  {
    id:"brown-rice",
    image: kidneybeans,
    text: "Kidney Beans",
    rating: "5"
  },
  {
    id:"brown-rice",
    image: poultryfeeds,
    text: "Poultry Feeds",
    rating: "5"
  },
  {
    id:"brown-rice",
    image: whitesugar,
    text: "White Sugar",
    rating: "5"
  },
  {
    id:"brown-rice",
    image: rawbrownsugar,
    text: "Raw Brown Sugar Powder"
  },
  {
    id:"brown-rice",
    image: jaggery,
    text: "Jaggery",
    rating: "5"
  },
  {
    id:"brown-rice",
    image: coconutoil,
    text: "Wood Pressed Coconut Oil",
    rating: "5"
  },
  {
    id:"brown-rice",
    image: groundnutoil,
    text: "Wood Pressed Groundnut Oil",
    rating: "5"
  },
  {
    id:"brown-rice",
    image: mustardoil,
    text: "Mustard Oil",
    rating: "5"
  },
  {
    id:"brown-rice",
    image: oliveoil,
    text: "Olive Oil",
    rating: "5"
  },
  {
    id:"brown-rice",
    image: palmoil,
    text: "Palm Oil",
    rating: "5"
  },
  {
    id:"brown-rice",
    image: tea,
    text: "Tea",
    rating: "5"
  },
  {
    id:"brown-rice",
    image: greentea,
    text: "Green Tea",
    rating: "5"
  }
];


const Ecommerce = () => {
  return (
    <div className="ecommerce-container">
      <h2>Our Products</h2>
      <div className="product-grid">
      {Products.map((product) => (
  <Link 
    key={product.id} 
    to={`/product/${product.id}`} // ✅ Dynamically generates the correct link
    className="product-card"
    style={{ textDecoration: "none", color: "inherit" }}
  >
    <img src={product.image} alt={product.text} />
    <h3>{product.text}</h3>
    {product.rating && <StarRating rating={parseFloat(product.rating)} />}
  </Link>
))}

      </div>
    </div>
  );
};

export default Ecommerce;


