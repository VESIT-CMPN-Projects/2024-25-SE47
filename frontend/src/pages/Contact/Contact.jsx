import Pageshead from "../../components/Pageshead/Pageshead";
import styles from "./contact.module.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import { useState } from "react";

const Contact = () => {
  const [phone, setPhone] = useState("");
  return (
    <div>
      <Pageshead text={"Contact Us"} />
      <form action="">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "20px",
          }}
        >
          <div className={styles.input_container}>
            <label htmlFor="">
              First Name<span style={{ color: "red" }}>*</span>
            </label>
            <input type="text" />
          </div>

          <div className={styles.input_container}>
            <label htmlFor="">
              Last Name<span style={{ color: "red" }}>*</span>
            </label>
            <input type="text" />
          </div>
        </div>
        <div className={styles.input_container}>
          <label htmlFor="">
            Comapany Name<span style={{ color: "red" }}>*</span>
          </label>
          <input type="email" />
        </div>
        <div className={styles.input_container}>
          <label htmlFor="">
            Comapany Email<span style={{ color: "red" }}>*</span>
          </label>
          <input type="email" />
        </div>
        <div className={styles.input_container}>
          <label htmlFor="">
            Phone Number <span style={{ color: "red" }}>*</span>
          </label>
          <PhoneInput
            country={"in"}
            enableSearch={true}
            value={phone}
            onChange={(phone) => setPhone(phone)}
            inputStyle={{padding: "5px", paddingLeft: "50px", width: "100%"}}
          />
        </div>
        <div className={styles.input_container}>
          <label htmlFor="question-image">
            Write your Requests / Queries here:<span style={{ color: "red" }}>*</span>
          </label>
           <textarea name="request" id="request" cols="82" rows="10"></textarea>
        </div>
        <div className={styles.input_container}>
          <button
            className="btn" id={styles.submitbtn}
            style={{ fontSize: "1rem", display: "block", margin: "auto" }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
