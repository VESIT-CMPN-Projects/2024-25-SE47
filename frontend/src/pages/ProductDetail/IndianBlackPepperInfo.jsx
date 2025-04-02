import React from "react";
import styles from "./BrownRiceInfo.module.css"; 
import StarRating from "../../components/StarRating"; 
import blackPepperImg from "../../assets/spices/blackpepper.png"; 

const IndianBlackPepperInfo = () => {
  return (
    <div className={styles.container}>
     
      <div className={styles.productRow}>
        <div className={styles.imageContainer}>
          <img
            src={blackPepperImg}
            alt="Indian Black Pepper"
            className={styles.productImage}
          />
        </div>
        <div className={styles.infoContainer}>
          <h1 className={styles.title}>Indian Black Pepper</h1>
          <p className={styles.description}>
            Indian Black Pepper, often called the "King of Spices," is one of the most widely used spices in the world. Sourced from the lush Western Ghats of India, it is known for its rich aroma, bold flavor, and medicinal benefits.
          </p>
          <p className={styles.description}>
            Black pepper contains a powerful compound called piperine, which enhances nutrient absorption and promotes digestive health. It is also packed with antioxidants, supporting immune function and reducing inflammation.
          </p>
          <p className={styles.description}>
            This versatile spice is used in a wide range of culinary applications, from seasoning meats and vegetables to enhancing soups, salads, and marinades. It pairs well with almost any dish, making it a staple in global cuisines.
          </p>
        </div>
      </div>

      <div className={styles.orderNowContainer}>
        <button className={styles.orderNowButton}>Order Now</button>
      </div>

      {/* Rating & Reviews Section */}
      <div className={styles.ratingReviews}>
        <div className={styles.ratingSection}>
          <h2>Rating</h2>
          <StarRating rating={4.8} /> 
        </div>

        <div className={styles.reviewsSection}>
          <h2>Customer Reviews</h2>
          <div className={styles.review}>
            <strong>Amit Sharma</strong>
            <p>
              The aroma and taste of this black pepper are unmatched! It adds a perfect spicy kick to my dishes.
            </p>
          </div>
          <div className={styles.review}>
            <strong>Sophia Williams</strong>
            <p>
              High-quality black pepper! Fresh, aromatic, and full of flavor. Will definitely buy again.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndianBlackPepperInfo;