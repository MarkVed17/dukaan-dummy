import data from "../../../data/data.json";
import "./SuggestionsBanner.css";

const SuggestionsBanner = () => {
  const { suggestedProducts } = data;

  return (
    <section className="suggestions__banner">
      <h1 className="suggestions__banner-title">Try our other free products</h1>
      <div className="suggestions__banner-products">
        {suggestedProducts.map(({ id, imgPath, title, subtitle }) => (
          <div key={id} className="suggestions-banner__suggestion">
            <div className="suggestion-banner__suggestion-media">
              <img
                src={imgPath}
                alt="privacy policy"
                className="suggestions-banner__suggestion-img"
              />
              <p className="suggestions-banner__suggestion-title">{title}</p>
            </div>
            <p className="suggestions-banner__suggestion-subtitle">
              {subtitle}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export { SuggestionsBanner };
