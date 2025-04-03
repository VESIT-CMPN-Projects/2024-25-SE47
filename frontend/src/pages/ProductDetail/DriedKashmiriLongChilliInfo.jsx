import React from "react";
import styles from "./BrownRiceInfo.module.css";
import StarRating from "../../components/StarRating";
import kashmiriChilliImg from "../../assets/spices/driedredkashmirichilli.png";

const DriedKashmiriLongChilliInfo = () => {
  return (
    <div className={styles.container}>
      {/* Row with Image (Left) and Description (Right) */}
      <div className={styles.productRow}>
        <div className={styles.imageContainer}>
          <img
            src={kashmiriChilliImg}
            alt="Dried Kashmiri Long Chilli"
            className={styles.productImage}
          />
        </div>
        <div className={styles.infoContainer}>
          <h1 className={styles.title}>Dried Kashmiri Long Chilli</h1>
          <p className={styles.description}>
            Kashmiri long chilli is known for its deep red color and mild heat. It is
            widely used in Indian cuisine to add vibrant color and a subtle smoky
            flavor to dishes. Unlike other chillies, it enhances the aesthetic appeal
            of food without overpowering it with spice.
          </p>
          <p className={styles.description}>
            This variety is perfect for preparing rich gravies, marinades, and spice
            blends. It is commonly used in curries, tandoori dishes, and chutneys,
            providing a balanced flavor with a slightly fruity undertone.
          </p>
          <p className={styles.description}>
            In addition to its culinary uses, Kashmiri chilli is packed with
            antioxidants and vitamin C, which help boost immunity and improve skin
            health. It also aids digestion and promotes metabolism.
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
            <strong>Rahul Sharma</strong>
            <p>
              This is the best Kashmiri chilli I have found. It gives my dishes an
              amazing color without making them too spicy!
            </p>
          </div>
          <div className={styles.review}>
            <strong>Ananya Verma</strong>
            <p>
              I love using these chillies in my curries. They add such a rich red hue
              and mild heat. Highly recommended!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriedKashmiriLongChilliInfo;