import Pageshead from "../../components/Pageshead/Pageshead"
import PDFPreview from "../../components/PDFPreview/PDFPreview"
import styles from "./certificate.module.css"

const Certificates = () => {

  return (
    <div id={"certificates"}>
      <Pageshead text={"CERTIFICATES"}/>
      <p id={styles.para}>ARASCO EXPORT INDIA PRIVATE LIMITED is committed to delivering the highest standards of quality and safety in its products. Our certifications reflect our dedication to excellence and adherence to global food safety and quality regulations. We proudly hold internationally recognized certifications such as ISO 22000 for food safety management and HACCP for hazard analysis and critical control points. These certifications validate our stringent quality control processes and ensure that every product meets the expectations of our global clientele.By maintaining these certifications, we continue to build trust and reliability among our customers worldwide.</p>

      <div>
       <PDFPreview/>
      </div>
    </div>
  )
}

export default Certificates
