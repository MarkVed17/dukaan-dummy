import { StepsBanner } from "../Banners/StepsBanner/StepsBanner";
import { SuggestionsBanner } from "../Banners/SuggestionsBanner/SuggestionsBanner";
import { SloganMaker } from "../SloganMaker/SloganMaker";
import "./Main.css";

const Main = () => {
  return (
    <div className="main-content">
      <SloganMaker />
      <StepsBanner />
      <SuggestionsBanner />
    </div>
  );
};

export { Main };
