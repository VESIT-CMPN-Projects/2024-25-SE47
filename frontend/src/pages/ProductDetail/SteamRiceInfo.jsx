import React from "react";
import styles from "./BrownRiceInfo.module.css";
import StarRating from "../../components/StarRating";
import steamRiceImg from "../../assets/rice/steamrice.png";

const SteamRiceInfo = () => {
  return (
    <div className={styles.container}>
      {/* Row with Image (Left) and Description (Right) */}
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
            Steam Rice is a versatile and highly nutritious grain, prepared
            through a special steaming process before milling. This method
            preserves essential nutrients, making it a healthier choice.
          </p>
          <p className={styles.description}>
            It has a soft texture, mild aroma, and is perfect for a variety of
            dishes, from simple daily meals to elaborate cuisines. Steam rice is
            widely used in Asian, Middle Eastern, and Mediterranean cooking.
          </p>
          <p className={styles.description}>
            Loaded with carbohydrates, vitamins, and minerals, steam rice helps
            in providing sustained energy, promoting digestion, and maintaining
            overall health. Its fluffy texture makes it an ideal pairing for
            curries, stir-fries, and biryanis.
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
            <strong>Amit Sharma</strong>
            <p>
              The steam rice is of excellent quality! It cooks perfectly and has
              a delightful texture.
            </p>
          </div>
          <div className={styles.review}>
            <strong>Emily Johnson</strong>
            <p>
              I love how fluffy and fragrant this steam rice is. Definitely my
              go-to choice for daily meals!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SteamRiceInfo;
