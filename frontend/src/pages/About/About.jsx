import Pageshead from "../../components/Pageshead/Pageshead";
import styles from "./about.module.css";
import exportglobe from "../../assets/export.png";

const About = () => {
  return (
    <div id="about">
      <Pageshead text={"ABOUT US"} />

      {/* 🌍 Company Overview */}
      <div id={styles.globe}>
        <img src={exportglobe} alt="India Globe" loading="lazy" />
        <div id={styles.intro}>
          <h1>ARASCO EXPORT INDIA</h1>
          <p><b>
            ARASCO EXPORT INDIA PRIVATE LIMITED, based in New Delhi, India, has been a trusted supplier, exporter, and trader of premium food
            products since 2023. With a strong focus on whole spices, pulses, rice varieties, cashew nuts, edible oils, and sugar, the company has established a solid reputation for quality and customer satisfaction.
            </b>
          </p>
        </div>
      </div>

      {/* 🎯 Vision & Mission Section */}
      <div className={styles.missionVisionContainer}>
        <div className={styles.card}>
          <h2>OUR MISSION</h2>
          <p>
            At ARASCO EXPORT INDIA, our mission is to provide top-quality food
            products that meet the diverse needs of our customers worldwide...
          </p>
        </div>

        <div className={styles.card}>
          <h2>OUR VISION</h2>
          <p>
            Our vision is to be a globally recognized leader in the food export
            industry, known for reliability, excellence, and innovation...
          </p>
        </div>
      </div>

      {/* 🛍️ Product Categories Section */}
      <div className={styles.productsSection}>
        <h2>🌟 OUR PREMIUM COLLECTION 🌟</h2>
        <div className={styles.productsGrid}>
          {/* Spices Category */}
          <div className={styles.productCard}>
            <h3>🌶️ Whole Spices</h3>
            <p>
              Explore our high-quality spices including nutmeg seeds, green cardamom, black pepper, fenugreek, cumin, and various red chilies like Kashmiri, Teja, Sankeshwari, and Bhut Jolokia.
            </p>
          </div>

          {/* Pulses Category */}
          <div className={styles.productCard}>
            <h3>🍲 Premium Pulses</h3>
            <p>
              We provide arhar dal, urad dal, moong dal, masoor dal, and chana dalx, all sourced from trusted farmers and processed with top standards.
            </p>
          </div>

          {/* Rice Category */}
          <div className={styles.productCard}>
            <h3>🍚 Basmati & Non-Basmati Rice</h3>
            <p>
              A rich selection of rice including 1121 Basmati Rice, Sugandha, Sona Masoori, and Sharbati for all culinary needs.
            </p>
          </div>

          {/* Dry Fruits Category */}
          <div className={styles.productCard}>
            <h3>🥜 Finest Dry Fruits</h3>
            <p>
              Indulge in A-grade cashew nuts, split cashews, roasted & raw cashews, packed with nutrition and taste.
            </p>
          </div>

          {/* Edible Oils Category */}
          <div className={styles.productCard}>
            <h3>🛢️ Pure Edible Oils</h3>
            <p>
              Discover wood-pressed oils including coconut, castor, groundnut, and sesame oil, ensuring purity and health benefits.
            </p>
          </div>

          {/* Sugar Category */}
          <div className={styles.productCard}>
            <h3>🍬 High-Quality Sugar</h3>
            <p>
              Offering raw brown sugar and white sugar, sourced from the best refineries.
            </p>
          </div>
        </div>
      </div>

      {/* 👥 Meet the Team Section */}
      <div id={styles.team}>
        <h2>MEET OUR TEAM</h2>
        <div className={styles.teamGrid}>
          <div className={styles.teamMember}>
            <h4>Abdul Rashid Siddique</h4>
            <span>Director</span>
          </div>
          <div className={styles.teamMember}>
            <h4>Nasreen Bano Siddique</h4>
            <span>Director</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
