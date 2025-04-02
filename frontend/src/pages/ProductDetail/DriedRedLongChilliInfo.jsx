import React from "react";
import styles from "./BrownRiceInfo.module.css";
import StarRating from "../../components/StarRating"; // Adjust import path if needed
import driedRedChilliImg from "../../assets/spices/driedredchilli.png"; // Adjust path if needed

const DriedRedChilliInfo = () => {
  return (
    <div className={styles.container}>
      {/* Row with Image (Left) and Description (Right) */}
      <div className={styles.productRow}>
        <div className={styles.imageContainer}>
          <img
            src={driedRedChilliImg}
            alt="Dried Red Long Chilli"
            className={styles.productImage}
          />
        </div>
        <div className={styles.infoContainer}>
          <h1 className={styles.title}>Dried Red Long Chilli</h1>
          <p className={styles.description}>
            Dried Red Long Chilli is known for its pungent flavor and rich aroma, making it an essential ingredient in many traditional dishes. It is widely used in Indian, Mexican, and Asian cuisines for adding heat and color to recipes.
          </p>
          <p className={styles.description}>
            These chillies are sun-dried to preserve their natural taste and nutritional value. They are rich in antioxidants, vitamin C, and capsaicin, which provides several health benefits including boosting metabolism and supporting immune health.
          </p>
          <p className={styles.description}>
            Apart from culinary uses, dried red chillies are also utilized in making chili powder, pickles, and infused oils for enhancing flavors in various dishes.
          </p>
        </div>
      </div>

      {/* Order Now Button */}
      <div className={styles.orderNowContainer}>
        <button className={styles.orderNowButton}>Order Now</button>
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
            <strong>Rahul Mehta</strong>
            <p>
              These chillies are perfect for making spicy curries! Great quality and deep red color.
            </p>
          </div>
          <div className={styles.review}>
            <strong>Lisa Wong</strong>
            <p>
              The flavor is fantastic! I love using these chillies in my Asian stir-fry dishes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriedRedChilliInfo;