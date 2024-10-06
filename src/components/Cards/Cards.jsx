import styles from "./cards.module.css"

// eslint-disable-next-line react/prop-types
const Cards = ({path, text, alt}) => {
  return (
    <div className={styles.cards}>
      <img src={path} alt={alt}/>
      <h3>{text}</h3>
    </div>
  )
}

export default Cards
