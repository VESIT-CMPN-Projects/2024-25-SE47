import styles from "./landing.module.css";
import globe from "../../assets/globe.png";
import indiaglobe from "../../assets/globeindia.png";
import cargo from "../../assets/cargo.png";
import Cards from "../../components/Cards/Cards";
import products from "../../data/popularproducts.js";
import chooseus from "../../data/chooseus.js";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Landing = () => {
  const settings = {
    dots: true, 
    infinite: true, 
    speed: 500, 
    slidesToShow: 4, 
    slidesToScroll: 1, 
    responsive: [
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 1, 
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <section id={styles.landing}></section>
      <div>
        <img src={globe} alt="Globe" loading="lazy"/>
      </div>
      <section id={styles.globe}>
        <img src={indiaglobe} alt="India Globe" loading="lazy"/>
        <div>
          <h1>ARASCO EXPORT INDIA</h1>
          <h3>Export Import and Trading of all Types of Food Items</h3>
        </div>
      </section>
      <p id={styles.intro}>

        As a trusted name in the food industry, <strong>ARASCO</strong> takes
        pride in exporting and importing a diverse range of premium products.
        From the finest spices to fresh fruits, high-quality rice, pulses, and
        various other food items, ARASCO ensures that every product meets the
        highest international quality standards. Whether you are looking to
        import or export, ARASCO is committed to delivering excellence and
        helping your products reach markets across the globe.
      </p>
      <div id={styles.cargo}>
        <img src={cargo} alt="Cargo" loading="lazy"/>
      </div>
      <section id={styles.products}>
        <h2>Popular Products</h2>
        <div className={styles.cardSlider}>
      <Slider {...settings}>
        {products.map((prod, index) => (
          <Cards key={index} path={prod.image} text={prod.text} alt={prod.alt}/>
        ))}
      </Slider>
    </div>
      </section>
      <section id={styles.chooseus}>
        <h2>WHY CHOOSE US?</h2>
        <div id={styles.choose_grid}>
          {chooseus.map((item, index) => {
            return (
              <div key={index} className={styles.choose_item}>
                <p className={styles.num}>{item.num}. </p>
                <div>
                  <h4>{item.head}</h4>
                  <p>{item.para}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      {/* <section id={styles.clients}>
        <h2>WHAT OUR CLIENTS SAY...</h2>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which do not look even slightly
          believable. If you are going to use a passage of Lorem Ipsum, you need
          to be sure there is not anything embarrassing hidden in the middle of
          text.{" "}
        </p>
      </section> */}
    </div>
  );
};

export default Landing;
