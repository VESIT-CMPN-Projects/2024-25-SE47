import Pageshead from "../../components/Pageshead/Pageshead";
import styles from "./contact.module.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import { useState } from "react";
import { toast } from "react-toastify";
import Select from 'react-select';
import countryList from 'react-select-country-list';


const Contact = () => {
  const options = countryList().getData();
  const [form, setForm] = useState({
    fName: "",
    lName: "",
    cName: "",
    email: "",
    phone: "",
    productDetails: "",
    product: "",
    country: ""
  })

 

  const handleChange = (e)=>{
    setForm((prev)=>{
      return {...prev, [e.target.name]: e.target.value}
    })
  }

  const setPhone = (phone)=>{
    setForm((prev)=>{
      return {...prev, phone}
    })
  }

  const handleSubmit = (e)=>{
     e.preventDefault();
     fetch(`${import.meta.env.VITE_API_BACKENDURL}/email`, {
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
      <Pageshead text={"Contact Us"} />
      <form onSubmit={handleSubmit} method="post">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "20px",
          }}
        >
          <div className={styles.input_container}>
            <label htmlFor="fName">
              First Name<span style={{ color: "red" }}>*</span>
            </label>
            <input id="fName" name="fName" type="text" value={form.fName} onChange={handleChange} required={true}/>
          </div>

          <div className={styles.input_container}>
            <label htmlFor="lName">
              Last Name<span style={{ color: "red" }}>*</span>
            </label>
            <input type="text" name="lName" id="lName" value={form.lName} onChange={handleChange} required={true}/>
          </div>
        </div>
        <div className={styles.input_container}>
          <label htmlFor="cName">
            Company Name
          </label>
          <input type="text" name="cName" id="cName" value={form.cName} onChange={handleChange}/>
        </div>
        <div className={styles.input_container}>
          <label htmlFor="email">
            Comapany Email<span style={{ color: "red" }}>*</span>
          </label>
          <input type="email" name="email" id="email" value={form.email} onChange={handleChange}
          />
          
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "20px",
          }}
        >
      <div className={styles.input_container}>
      <label>Country: <span style={{ color: "red" }}>*</span></label>
      <Select
        options={options}
        value={form.country}
        name="country"
        onChange={handleChange}
        placeholder="Country"
        id={styles.country}
      />
    </div>
        <div className={styles.input_container}>
          <label htmlFor="phone">
            Phone Number <span style={{ color: "red" }}>*</span>
          </label>
          <PhoneInput
            country={"in"}
            enableSearch={true}
            value={form.phone}
            onChange={(phone)=>setPhone(phone)}
            inputStyle={{padding: "9px", paddingLeft: "50px", width: "100%"}}
          />
        </div>
        </div>


        <div className={styles.input_container}>
          <label htmlFor="product">
            Product/Services Looking for<span style={{ color: "red" }}>*</span>
          </label>
          <input type="text" name="product" id="product" value={form.email} onChange={handleChange}
          />
        </div>


        <div className={styles.input_container}>
          <label htmlFor="productDetails">
            Details of the Product Required<span style={{ color: "red" }}>*</span>
          </label>
           <textarea name="productDetails" id="productDetails" value={form.productDetails} cols="82" rows="10" onChange={handleChange}></textarea>
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

export default Contact;
