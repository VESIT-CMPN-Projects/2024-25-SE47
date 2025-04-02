import React from "react";
import styles from "./BrownRiceInfo.module.css";
import StarRating from "../../components/StarRating";
import masooriRice from "../../assets/rice/masooririce.png";

const MasooriRiceInfo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.productRow}>
        <div className={styles.imageContainer}>
          <img
            src={masooriRice}
            alt="Masoori Rice"
            className={styles.productImage}
          />
        </div>
        <div className={styles.infoContainer}>
          <h1 className={styles.title}>Masoori Rice</h1>
          <p className={styles.description}>
            Masoori Rice is a lightweight and aromatic variety of rice known for its rich texture and delicious taste. It is widely used in Indian cuisine for everyday meals and special dishes.
          </p>
          <p className={styles.description}>
            Unlike traditional Basmati, Masoori Rice cooks faster and has a slightly softer texture, making it an excellent choice for dishes like biryanis, pulao, and plain steamed rice.
          </p>
          <p className={styles.description}>
            High in fiber and essential nutrients, Masoori Rice provides a healthy alternative for those looking to maintain a balanced diet while enjoying flavorful meals.
          </p>
        </div>
      </div>
      
      <div className={styles.orderNowContainer}>
        <button className={styles.orderNowButton}>Order Now</button>
      </div>
      
      <div className={styles.ratingReviews}>
        <div className={styles.ratingSection}>
          <h2>Rating</h2>
          <StarRating rating={4.6} />
        </div>
        <div className={styles.reviewsSection}>
          <h2>Customer Reviews</h2>
          <div className={styles.review}>
            <strong>Amit Sharma</strong>
            <p>
              Masoori Rice is my go-to for daily meals. It has a great texture and absorbs flavors beautifully.
            </p>
          </div>
          <div className={styles.review}>
            <strong>Priya Patel</strong>
            <p>
              The quality is fantastic, and the grains cook perfectly every time. Highly recommend this variety!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MasooriRiceInfo;
