import Pageshead from "../../components/Pageshead/Pageshead";
import styles from "./about.module.css";
import exportglobe from "../../assets/export.png";

const About = () => {
  return (
    <div id="about">
      <Pageshead text={"ABOUT US"} />
      <div id={styles.globe}>
        <img src={exportglobe} alt="India Globe" loading="lazy" />
        <div id={styles.intro}>
          <h1>ARASCO EXPORT INDIA</h1>
          <p>
            ARASCO EXPORT INDIA PRIVATE LIMITED, based in New Delhi, India, has
            been a trusted supplier, exporter, and trader of premium food
            products since 2023. With a diverse range of whole spices, pulses,
            rice varieties, cashew nuts, edible oils, and sugar, the company
            emphasizes quality, customer satisfaction, and global reach. Under
            the leadership of Mr. Abdul Rashid Siddique, ARASCO has established
            itself as a reliable name in the competitive food industry.
          </p>
          <ul>
            <li>
              <strong>Whole Spices: </strong>
              Nutmeg, cardamom, black pepper, fenugreek, cumin, red chilies
              (Kashmiri, Teja, Bhut Jolokia), turmeric, mustard, and coriander
              seeds.
            </li>

            <li>
              <strong>Pulses: </strong>
              Arhar dal, urad dal, moong dal, masoor dal, and chana dal,
              sourced from trusted farmers.
            </li>

            <li>
              <strong>Rice Varieties: </strong>
              Basmati (1121, Sugandha) and non-basmati (Sona Masoori,
              Sharbati).
            </li>

            <li>
              <strong>Dry Fruits & Oils: </strong>
              Cashew nuts (A-grade, roasted, raw) and wood-pressed oils
              (coconut, castor, groundnut, sesame).
            </li>

            <li>
              <strong>Sugar:</strong>
              Raw brown sugar and white sugar, tested to meet high-quality
              standards.
            </li>
          </ul>
        </div>
      </div>

      <div id={styles.mission}>
        <h2>OUR MISSION</h2>
        <p>
          At ARASCO EXPORT INDIA, our mission is to provide top-quality food
          products that meet the diverse needs of our customers worldwide. We
          are committed to ensuring customer satisfaction through our dedication
          to sourcing the finest spices, pulses, rice, dry fruits, oils, and
          sugars while maintaining rigorous quality standards.
        </p>
      </div>

      <div id={styles.vision}>
        <h2>OUR VISION</h2>
        <p>
          Our vision is to be a globally recognized leader in the food export
          industry, known for reliability, excellence, and innovation. We aim to
          expand our reach, enhance customer relationships, and continually
          provide superior products that promote health and well-being across
          the world.
        </p>
      </div>

      <div id={styles.team}>
        <h2>MEET OUR TEAM</h2>
        <div className={styles.teamGrid}>
          <div className={styles.teamMember}>
            <img src="" alt="" />
            <h4>Abdul Rashid Siddique</h4>
            <span>Director</span>
          </div>
          <div className={styles.teamMember}>
            <img src="" alt="" />
            <h4>Nasreen Bano Siddique</h4>
            <span>Director</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

