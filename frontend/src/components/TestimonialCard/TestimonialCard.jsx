/* eslint-disable react/prop-types */
const TestimonialCard = ({message, img, name}) => {
  return (
    <div>
      <p>{message}</p>
      <div>
      <img src={img} alt={img} />
       <h3>{name}</h3>
      </div>
    </div>
  )
}

export default TestimonialCard
