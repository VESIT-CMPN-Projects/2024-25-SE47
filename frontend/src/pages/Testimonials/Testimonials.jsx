import Pageshead from "../../components/Pageshead/Pageshead";
import styles from "./testimonials.module.css"
import feedback from "../../assets/feedback.png"

const Testimonials = () => {
  return (
    <div>
      <Pageshead text={"CUSTOMER TESTIMONIALS"} />
      <div id={styles.globe}>
        <img src={feedback} alt="India Globe" loading="lazy" />
          <p>Your trust is our greatest achievement. Thank you for being an invaluable part of our story.</p>
      </div>
    </div>
  );
};

export default Testimonials;
