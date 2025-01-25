import Pageshead from "../../components/Pageshead/Pageshead";
import styles2 from "./testimonials.module.css"
import styles from "../Contact/contact.module.css"
import feedback from "../../assets/feedback.png"
import { useState } from "react";
import { toast } from "react-toastify";

const Testimonials = () => {
    const [form, setForm] = useState({
      name: "",
      profession: "",
      profile: "",
      message: "",
    })

const handleChange = (e)=>{
    setForm((prev)=>{
      return {...prev, [e.target.name]: e.target.value}
    })
  }

  const handleSubmit = (e)=>{
     e.preventDefault();
     fetch(`${import.meta.env.VITE_API_BACKENDURL}/addfeedback`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })
    .then((response)=>response.json())
    .then(()=>{
      toast.success('Submit Successfully', {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    })
    .catch((err)=>{
      console.log(err)
      toast.error('Failed to Send! Please report at below email', {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    })
  }

  return (
    <div>
      <Pageshead text={"CUSTOMER TESTIMONIALS"} />
      <div id={styles2.globe}>
        <img src={feedback} alt="India Globe" loading="lazy" />
          <p className={styles2.tag}>Your trust is our greatest achievement. Thank you for being an invaluable part of our story.</p>
      </div>

      <form onSubmit={handleSubmit} method="post">
      <h3>Give your Feedback</h3>
          <div className={styles.input_container}>
            <label htmlFor="name">
              Full Name<span style={{ color: "red" }}>*</span>
            </label>
            <input id="name" name="name" type="text" value={form.name} onChange={handleChange} placeholder="Full Name" required={true}/>
          </div>
        <div className={styles.input_container}>
          <label htmlFor="profession">
            Profession / Company Name<span style={{ color: "red" }}>*</span>
          </label>
          <input type="text" name="profession" id="profession" value={form.profession} onChange={handleChange} placeholder="Profession / Company Name"/>
        </div>

        <div className={styles.input_container}>
          <label htmlFor="profile">
           Profile picture
          </label>
          <input type="file" name="profile" id="profile" value={form.profile} onChange={handleChange} placeholder="Add drive link of profile"/>
        </div>

        <div className={styles.input_container}>
          <label htmlFor="message">
           Your Feedback<span style={{ color: "red" }}>*</span>
          </label>
           <textarea name="message" id="message" value={form.message} cols="82" rows="5" onChange={handleChange} placeholder="Please provide your feedback"></textarea>
        </div>

        <div className={styles.input_container}>
          <button
            className="btn" id={styles.submitbtn}
            style={{ fontSize: "1rem", display: "block", margin: "auto" }}
          type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Testimonials;
