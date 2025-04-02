import React from "react";
import styles from "./BrownRiceInfo.module.css";
import StarRating from "../../components/StarRating";
import cinnamonStickImg from "../../assets/spices/cinnamon.png";

const CinnamonStickInfo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.productRow}>
        <div className={styles.imageContainer}>
          <img
            src={cinnamonStickImg}
            alt="Cinnamon Stick"
            className={styles.productImage}
          />
        </div>
        <div className={styles.infoContainer}>
          <h1 className={styles.title}>Cinnamon Stick</h1>
          <p className={styles.description}>
            Cinnamon sticks are one of the most popular spices, known for their
            warm, aromatic flavor and numerous health benefits. Derived from
            the inner bark of cinnamon trees, these sticks are commonly used in
            cooking, baking, and beverages.
          </p>
          <p className={styles.description}>
            Packed with antioxidants and anti-inflammatory properties, cinnamon
            sticks help regulate blood sugar levels, boost immunity, and
            support heart health. They are also a natural remedy for colds and
            digestion issues.
          </p>
          <p className={styles.description}>
            Cinnamon is widely used in spiced teas, curries, desserts, and
            infused drinks, adding a rich and warm flavor to various dishes.
          </p>
        </div>
      </div>
      
      <div className={styles.orderNowContainer}>
        <button className={styles.orderNowButton}>Order Now</button>
      </div>
      
      <div className={styles.ratingReviews}>
        <div className={styles.ratingSection}>
          <h2>Rating</h2>
          <StarRating rating={4.8} />
        </div>
        <div className={styles.reviewsSection}>
          <h2>Customer Reviews</h2>
          <div className={styles.review}>
            <strong>Emma Brown</strong>
            <p>
              The best cinnamon sticks I've ever bought! The aroma is strong,
              and they add amazing flavor to my tea.
            </p>
          </div>
          <div className={styles.review}>
            <strong>Michael Johnson</strong>
            <p>
              Great quality! These cinnamon sticks last long and work perfectly
              for baking and cooking.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CinnamonStickInfo;