import React from "react";
import styles from "./BrownRiceInfo.module.css";
import StarRating from "../../components/StarRating";
import steamRiceImg from "../../assets/rice/steamrice.png";

const SteamRiceInfo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.productRow}>
        <div className={styles.imageContainer}>
          <img
            src={steamRiceImg}
            alt="Steam Rice"
            className={styles.productImage}
          />
        </div>
        <div className={styles.infoContainer}>
          <h1 className={styles.title}>Steam Rice</h1>
          <p className={styles.description}>
            Steam Rice is a versatile grain that undergoes a steaming process before milling, helping retain essential nutrients. It has a soft texture and is widely used in everyday meals.
          </p>
          <p className={styles.description}>
            This rice variety is easy to cook, making it a preferred choice for various dishes, including curries, stir-fries, and rice bowls.
          </p>
        </div>
      </div>
      <div className={styles.orderNowContainer}>
        <button className={styles.orderNowButton}>Order Now</button>
      </div>
      <div className={styles.ratingReviews}>
        <div className={styles.ratingSection}>
          <h2>Rating</h2>
          <StarRating rating={4.7} />
        </div>
        <div className={styles.reviewsSection}>
          <h2>Customer Reviews</h2>
          <div className={styles.review}>
            <strong>Vikram Patel</strong>
            <p>
              This steam rice is of excellent quality! It retains its flavor and texture even after cooking.
            </p>
          </div>
          <div className={styles.review}>
            <strong>Lisa Green</strong>
            <p>
              The best steam rice I’ve ever tried! It’s fluffy, delicious, and easy to cook.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SteamRiceInfo;
