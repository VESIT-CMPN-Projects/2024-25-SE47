import React from "react";
import styles from "./BrownRiceInfo.module.css";
import StarRating from "../../components/StarRating";
import whiteRiceImg from "../../assets/rice/whiterice.png";

const WhiteRiceInfo = () => {
  return (
    <div className={styles.container}>
      {/* Image and Description Row */}
      <div className={styles.productRow}>
        <div className={styles.imageContainer}>
          <img src={whiteRiceImg} alt="White Rice" className={styles.productImage} />
        </div>
        <div className={styles.infoContainer}>
          <h1 className={styles.title}>White Rice</h1>
          <p className={styles.description}>
            White rice is a staple food consumed worldwide. It is milled and polished to remove the bran
            and germ, resulting in a softer texture and longer shelf life. This process enhances its 
            cooking efficiency and versatility in various cuisines.
          </p>
          <p className={styles.description}>
            Although white rice loses some nutrients during milling, many varieties are enriched with essential 
            vitamins like folic acid, iron, and B vitamins. It provides a quick source of energy, making it a 
            perfect choice for athletes and active individuals.
          </p>
          <p className={styles.description}>
            White rice is a fundamental ingredient in numerous global dishes, from Asian stir-fries and sushi 
            to risottos and pilafs. Its neutral flavor and ability to absorb sauces make it an adaptable and 
            popular choice for home cooks and professional chefs alike.
          </p>
        </div>
      </div>
      
      <div className={styles.orderButtonsContainer}>
              <button className={styles.orderNowButton}>Order Now</button>
              <button className={styles.addToCartButton}>Add to Cart</button>
      </div>
      
      {/* Rating & Reviews Section */}
      <div className={styles.ratingReviews}>
        <div className={styles.ratingSection}>
          <h2>Rating</h2>
          <StarRating rating={4.6} />
        </div>
        <div className={styles.reviewsSection}>
          <h2>Customer Reviews</h2>
          <div className={styles.review}>
            <strong>Emily Johnson</strong>
            <p>
              This white rice is top quality! It cooks perfectly fluffy and tastes amazing. 
              Highly recommended for daily meals.
            </p>
          </div>
          <div className={styles.review}>
            <strong>Raj Patel</strong>
            <p>
              Great product! The texture is smooth, and it pairs well with all kinds of dishes. 
              I use it every day in my cooking.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhiteRiceInfo;
