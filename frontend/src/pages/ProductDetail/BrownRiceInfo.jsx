import React from "react";
import styles from "./BrownRiceInfo.module.css"; // CSS Module
import StarRating from "../../components/StarRating"; // Adjust import path if needed
import brownRiceImg from "../../assets/rice/brownrice.png"; // Adjust path if needed

const BrownRiceInfo = () => {
  return (
    <div className={styles.container}>
      {/* Row with Image (Left) and Description (Right) */}
      <div className={styles.productRow}>
        <div className={styles.imageContainer}>
          <img
            src={brownRiceImg}
            alt="Brown Rice"
            className={styles.productImage}
          />
        </div>
        <div className={styles.infoContainer}>
          <h1 className={styles.title}>Brown Rice</h1>
          <p className={styles.description}>
            Brown rice is a highly nutritious whole grain that retains its bran
            and germ layers, making it a healthier alternative to white rice.
            Unlike white rice, which undergoes milling and polishing, brown rice
            maintains its natural fiber, vitamins, and minerals, providing
            numerous health benefits. It is rich in dietary fiber, which aids
            digestion, supports gut health, and helps in weight management.
          </p>
          <p className={styles.description}>
            Additionally, brown rice is packed with essential nutrients like
            magnesium, iron, B vitamins, and antioxidants, all of which
            contribute to overall well-being. Its high fiber content helps
            regulate cholesterol levels, reducing the risk of heart disease.
          </p>
          <p className={styles.description}>
            With its impressive nutritional profile and rich taste, brown rice is
            an excellent choice for those looking to maintain a balanced diet.
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
          <StarRating rating={4.5} />
        </div>

        <div className={styles.reviewsSection}>
          <h2>Customer Reviews</h2>
          <div className={styles.review}>
            <strong>John Doe</strong>
            <p>
              I love the nutty flavor of brown rice. It's so healthy and cooks
              perfectly every time!
            </p>
          </div>
          <div className={styles.review}>
            <strong>Jane Smith</strong>
            <p>
              Great quality! I switched from white rice to brown rice and feel
              so much better.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default BrownRiceInfo;
