import "./HomeBackgroundComponent.scss";
import DryCleaningComponent from "../DryCleaningComponent";
import NoiseInsulationComponent from "../NoiseInsulationComponent";
import PolyurethaneComponent from "../PolyurethaneComponent";
import VinylComponent from "../VinylComponent";
import PolishingComponent from "../PolishingComponent";
import QuestionComponent from "../QuestionComponent";

const HomeBackgroundComponent = () => {
  return (
    <div className="HomeBackgroundComponent">
      <div className="parallax-background"></div>
      <div className="content-wrapper">
        <PolyurethaneComponent />
        <VinylComponent />
        <NoiseInsulationComponent />
        <DryCleaningComponent />
        <PolishingComponent />
        <QuestionComponent />
      </div>
    </div>
  );
};

export default HomeBackgroundComponent;
