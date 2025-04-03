import React from "react";
import styles from "./BrownRiceInfo.module.css";
import StarRating from "../../components/StarRating";
import turmericFingerImg from "../../assets/spices/turmuric.png";

const IndianTurmericFingerInfo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.productRow}>
        <div className={styles.imageContainer}>
          <img
            src={turmericFingerImg}
            alt="Indian Turmeric Finger"
            className={styles.productImage}
          />
        </div>
        <div className={styles.infoContainer}>
          <h1 className={styles.title}>Indian Turmeric Finger</h1>
          <p className={styles.description}>
            Indian Turmeric Finger is widely known for its deep golden color,
            rich flavor, and exceptional medicinal properties. Used in cooking,
            Ayurveda, and skincare, turmeric is a staple in Indian households.
          </p>
          <p className={styles.description}>
            It contains curcumin, a powerful compound with anti-inflammatory and
            antioxidant properties. Turmeric aids digestion, boosts immunity,
            and promotes glowing skin. It is also beneficial for joint health
            and supports overall well-being.
          </p>
          <p className={styles.description}>
            Whether used in traditional curries, herbal teas, or beauty
            treatments, Indian Turmeric Finger remains a prized spice in
            kitchens and wellness routines worldwide.
          </p>
        </div>
      </div>
      
      <div className={styles.orderButtonsContainer}>
              <button className={styles.orderNowButton}>Order Now</button>
              <button className={styles.addToCartButton}>Add to Cart</button>
      </div>
      
      <div className={styles.ratingReviews}>
        <div className={styles.ratingSection}>
          <h2>Rating</h2>
          <StarRating rating={4.9} />
        </div>
        <div className={styles.reviewsSection}>
          <h2>Customer Reviews</h2>
          <div className={styles.review}>
            <strong>Priya Sharma</strong>
            <p>
              High-quality turmeric with a rich color and strong aroma! Perfect
              for my daily golden milk and curries.
            </p>
          </div>
          <div className={styles.review}>
            <strong>David Thompson</strong>
            <p>
              Great purity and taste. It enhances my dishes and has amazing
              health benefits. Highly recommended!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndianTurmericFingerInfo;