import React from "react";
import styles from "./BrownRiceInfo.module.css";
import StarRating from "../../components/StarRating";
import corianderSeedsImg from "../../assets/spices/corrianderseeds.png";

const CorianderSeedsInfo = () => {
  return (
    <div className={styles.container}>
      {/* Row with Image (Left) and Description (Right) */}
      <div className={styles.productRow}>
        <div className={styles.imageContainer}>
          <img
            src={corianderSeedsImg}
            alt="Coriander Seeds"
            className={styles.productImage}
          />
        </div>
        <div className={styles.infoContainer}>
          <h1 className={styles.title}>Coriander Seeds</h1>
          <p className={styles.description}>
            Coriander seeds are widely used in cooking due to their warm,
            nutty, and citrusy flavor. These tiny seeds are packed with
            antioxidants and essential nutrients that promote digestion, boost
            immunity, and support heart health.
          </p>
          <p className={styles.description}>
            They are commonly used in spice blends, curries, and pickling due to
            their rich aroma. When ground, they form the base for many Indian,
            Middle Eastern, and Latin American dishes.
          </p>
          <p className={styles.description}>
            Coriander seeds contain dietary fiber, iron, and magnesium, making
            them an excellent addition to a balanced diet. They are also known
            for their potential to regulate blood sugar levels and improve skin
            health.
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
          <StarRating rating={4.6} />
        </div>

        <div className={styles.reviewsSection}>
          <h2>Customer Reviews</h2>
          <div className={styles.review}>
            <strong>Amit Sharma</strong>
            <p>Fresh and aromatic! Perfect for my homemade spice blends.</p>
          </div>
          <div className={styles.review}>
            <strong>Sophia Lee</strong>
            <p>The best quality coriander seeds I've ever used! Great flavor.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorianderSeedsInfo;