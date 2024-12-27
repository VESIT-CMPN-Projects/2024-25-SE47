import styles from "./pageshead.module.css"

// eslint-disable-next-line react/prop-types
const Pageshead = ({text}) => {
  return (
    <div id={styles.headcontainer}>
      <h1>{text}</h1>
      <div id={styles.underline}></div>
    </div>
  )
}

export default Pageshead
