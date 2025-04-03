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
          <p>
            ARASCO EXPORT INDIA PRIVATE LIMITED, based in New Delhi, India, has
            been a trusted supplier, exporter, and trader of premium food
            products since 2023...
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
