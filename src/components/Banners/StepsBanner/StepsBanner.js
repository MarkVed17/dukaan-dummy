import data from "../../../data/data.json";
import "./StepsBanner.css";

const StepsBanner = () => {
  const { bannerComponents } = data;

  return (
    <section className="steps__banner">
      {bannerComponents.map(({ id, iconPath, title, description }) => (
        <div key={id} className="steps-banner__step">
          <div className="steps-banner__step-main">
            <img
              src={iconPath}
              alt="search"
              className="step-banner__step-main__icon"
            />
            <span className="step-banner__step-main__title">{title}</span>
          </div>
          <p className="steps-banner__step-main__desc">{description}</p>
        </div>
      ))}
    </section>
  );
};

export { StepsBanner };
