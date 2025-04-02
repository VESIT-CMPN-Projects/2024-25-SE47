import React from "react";
import styles from "./GoldenRiceInfo.module.css";
import StarRating from "../../components/StarRating";
import goldenRice from "../../assets/rice/goldenrice.png";

const GoldenRiceInfo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.productRow}>
        <div className={styles.imageContainer}>
          <img
            src={goldenRice}
            alt="Golden Rice"
            className={styles.productImage}
          />
        </div>
        <div className={styles.infoContainer}>
          <b></b><h1 className={styles.title}>Golden Rice</h1>
          <p className={styles.description}>
            Golden Rice is a variety of rice engineered to produce beta-carotene, a precursor of vitamin A, in its grains. This biofortified rice aims to combat vitamin A deficiency, which is prevalent in many parts of the world.
          </p>
          <p className={styles.description}>
            Consuming Golden Rice can significantly improve vitamin A intake, potentially reducing related health issues such as blindness and immune system weaknesses. Studies suggest that substituting Golden Rice for conventional rice could provide a substantial portion of the recommended vitamin A requirement for children in countries like Bangladesh and the Philippines.
          </p>
          <p className={styles.description}>
            With its potential to enhance nutritional intake and support overall health, Golden Rice represents a promising development in addressing global micronutrient deficiencies.
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
          <StarRating rating={4.7} />
        </div>
        <div className={styles.reviewsSection}>
          <h2>Customer Reviews</h2>
          <div className={styles.review}>
            <strong>Maria Gonzales</strong>
            <p>
              Incorporating Golden Rice into our meals has noticeably improved our family's health. It's reassuring to know we're getting essential nutrients.
            </p>
          </div>
          <div className={styles.review}>
            <strong>Li Wei</strong>
            <p>
              The subtle flavor and health benefits of Golden Rice make it a staple in our household. Highly recommend for those looking to enhance their diet.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default GoldenRiceInfo;
