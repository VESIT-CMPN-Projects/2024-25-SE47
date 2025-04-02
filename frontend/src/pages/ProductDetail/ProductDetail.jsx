
import { useParams } from "react-router-dom";
import BrownRiceInfo from "./BrownRiceInfo";
import GoldenRiceInfo from "./GoldenRiceInfo";
import MasooriRiceInfo from "./MasooriRiceInfo";
import SteamBasmatiRiceInfo from "./SteamBasmatiRiceInfo";
import SteamRiceInfo from "./SteamRiceInfo";
import WhiteRiceInfo from "./WhiteRiceInfo";
import CinnamonInfo from "./CinnamonStickInfo";
import TurmericInfo from "./IndianTurmericFingerInfo";
import DriedRedLongChilliInfo from "./DriedRedLongChilliInfo";
import DriedKashmiriLongChilliInfo from "./DriedKashmiriLongChilliInfo";
import CorianderSeedsInfo from "./CorianderSeedsInfo";
import IndianBlackPepperInfo from "./IndianBlackPepperInfo";
// import NutmegInfo from "./NutmegInfo";
// import GreenCardamomInfo from "./GreenCardamomInfo";
// import DryClovesInfo from "./DryClovesInfo";
// import TurmericPowderInfo from "./TurmericPowderInfo";
// import CorianderPowderInfo from "./CorianderPowderInfo";
// import CuminPowderInfo from "./CuminPowderInfo";
// import GarlicPowderInfo from "./GarlicPowderInfo";
// import OnionPowderInfo from "./OnionPowderInfo";
// import GuarGumPowderInfo from "./GuarGumPowderInfo";
// import PotatoFlakesInfo from "./PotatoFlakesInfo";
// import CoconutPowderInfo from "./CoconutPowderInfo";
// import RawCoconutInfo from "./RawCoconutInfo";
// import GreenCoconutInfo from "./GreenCoconutInfo";
// import ChickpeasInfo from "./ChickpeasInfo";
// import GreenGramInfo from "./GreenGramInfo";
// import UradDaalInfo from "./UradDaalInfo";
// import PigeonPeasInfo from "./PigeonPeasInfo";
// import KidneyBeansInfo from "./KidneyBeansInfo";
// import PoultryFeedsInfo from "./PoultryFeedsInfo";
// import WhiteSugarInfo from "./WhiteSugarInfo";
// import RawBrownSugarInfo from "./RawBrownSugarInfo";
// import JaggeryInfo from "./JaggeryInfo";
// import CoconutOilInfo from "./CoconutOilInfo";
// import GroundnutOilInfo from "./GroundnutOilInfo";
// import MustardOilInfo from "./MustardOilInfo";
// import OliveOilInfo from "./OliveOilInfo";
// import PalmOilInfo from "./PalmOilInfo";
// import TeaInfo from "./TeaInfo";
// import GreenTeaInfo from "./GreenTeaInfo";

const ProductDetail = () => {
  const { productId } = useParams(); // Get product ID from URL

  // Map product IDs to their corresponding detail components
  const productComponents = {
    "brown-rice": <BrownRiceInfo />,
    "golden-rice": <GoldenRiceInfo />,
    "masoori-rice": <MasooriRiceInfo />,
    "steam-basmati-rice": <SteamBasmatiRiceInfo />,
    "steam-rice": <SteamRiceInfo />,
    "white-rice": <WhiteRiceInfo />,
    "cinnamon": <CinnamonInfo />,
    "turmeric": <TurmericInfo />,
     "dried-red-chilli": <DriedRedLongChilliInfo />,
    "dried-kashmiri-red-chilli": <DriedKashmiriLongChilliInfo />,
    "coriander-seeds": <CorianderSeedsInfo />,
    "black-pepper": <IndianBlackPepperInfo />,
    // "nutmeg": <NutmegInfo />,
    // "green-cardamom": <GreenCardamomInfo />,
    // "dry-cloves": <DryClovesInfo />,
    // "turmeric-powder": <TurmericPowderInfo />,
    // "coriander-powder": <CorianderPowderInfo />,
    // "cumin-powder": <CuminPowderInfo />,
    // "garlic-powder": <GarlicPowderInfo />,
    // "onion-powder": <OnionPowderInfo />,
    // "guar-gum-powder": <GuarGumPowderInfo />,
    // "potato-flakes": <PotatoFlakesInfo />,
    // "coconut-powder": <CoconutPowderInfo />,
    // "raw-coconut": <RawCoconutInfo />,
    // "green-coconut": <GreenCoconutInfo />,
    // "chickpeas": <ChickpeasInfo />,
    // "green-gram": <GreenGramInfo />,
    // "urad-daal": <UradDaalInfo />,
    // "pigeon-peas": <PigeonPeasInfo />,
    // "kidney-beans": <KidneyBeansInfo />,
    // "poultry-feeds": <PoultryFeedsInfo />,
    // "white-sugar": <WhiteSugarInfo />,
    // "raw-brown-sugar": <RawBrownSugarInfo />,
    // "jaggery": <JaggeryInfo />,
    // "coconut-oil": <CoconutOilInfo />,
    // "groundnut-oil": <GroundnutOilInfo />,
    // "mustard-oil": <MustardOilInfo />,
    // "olive-oil": <OliveOilInfo />,
    // "palm-oil": <PalmOilInfo />,
    // "tea": <TeaInfo />,
    // "green-tea": <GreenTeaInfo />,
  };

  return (
    <div>
      {productComponents[productId] || <h2>Product details not available</h2>}
    </div>
  );
};

export default ProductDetail;
