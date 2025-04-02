import Pageshead from "../../components/Pageshead/Pageshead";
import exportglobe from "../../assets/export.png";

const About = () => {
  return (
    <div id="about" className="bg-gray-100 py-10 px-6">
      <Pageshead text={"ABOUT US"} />
      
      <div className="flex flex-col md:flex-row items-center gap-8 max-w-6xl mx-auto bg-white p-6 shadow-lg rounded-lg">
        <img src={exportglobe} alt="India Globe" loading="lazy" className="w-64 h-64 object-cover rounded-lg" />
        <div>
          <h1 className="text-3xl font-bold text-gray-800">ARASCO EXPORT INDIA</h1>
          <p className="text-gray-600 mt-3 leading-relaxed">
            ARASCO EXPORT INDIA PRIVATE LIMITED, based in New Delhi, India, has been a trusted supplier, exporter, and trader of premium food products since 2023. Under the leadership of <strong>Mr. Abdul Rashid Siddique</strong>, ARASCO has established itself as a reliable name in the competitive food industry.
          </p>
          <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
            <li><strong>Whole Spices:</strong> Nutmeg, cardamom, black pepper, turmeric, mustard, etc.</li>
            <li><strong>Pulses:</strong> Arhar dal, urad dal, moong dal, masoor dal, chana dal.</li>
            <li><strong>Rice Varieties:</strong> Basmati (1121, Sugandha), Sona Masoori, Sharbati.</li>
            <li><strong>Dry Fruits & Oils:</strong> Cashew nuts, wood-pressed oils.</li>
            <li><strong>Sugar:</strong> Raw brown sugar, white sugar.</li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 mt-12">
        <div className="bg-white p-6 shadow-lg rounded-lg text-center">
          <h3 className="text-xl font-semibold text-gray-800">Delivering Quality and Customer Satisfaction Globally</h3>
          <p className="text-gray-600 mt-2">At ARASCO EXPORT INDIA, our mission is to provide top-quality food products to meet the diverse needs of our customers worldwide.</p>
        </div>
        <div className="bg-white p-6 shadow-lg rounded-lg text-center">
          <h3 className="text-xl font-semibold text-gray-800">Becoming a Global Leader in Food Exports</h3>
          <p className="text-gray-600 mt-2">We aim to be a globally recognized leader in the food export industry, known for excellence and innovation.</p>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto text-center mt-12">
        <h2 className="text-2xl font-bold text-gray-800">Meet Our Team</h2>
        <div className="flex flex-wrap justify-center gap-6 mt-6">
          <div className="bg-white p-4 shadow-md rounded-lg w-64">
            <img src="" alt="" className="w-20 h-20 mx-auto rounded-full bg-gray-300" />
            <h4 className="mt-3 text-lg font-semibold">Abdul Rashid Siddique</h4>
            <span className="text-gray-500">Director</span>
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg w-64">
            <img src="" alt="" className="w-20 h-20 mx-auto rounded-full bg-gray-300" />
            <h4 className="mt-3 text-lg font-semibold">Nasreen Bano Siddique</h4>
            <span className="text-gray-500">Director</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
