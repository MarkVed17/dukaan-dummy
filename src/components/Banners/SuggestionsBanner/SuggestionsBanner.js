import "./SuggestionsBanner.css";
// import policyImg from "/public/assets/images/banners/privacy-policy-generator.svg";
// import termsImg from "../../../assets/images/banners/tems-conditions-generator.svg";
// import domainImg from "../../../assets/images/banners/domain-name-generator.svg";
// import invoiceImg from "../../../assets/images/banners/invoice-generator.svg";

const SuggestionsBanner = () => {
  return (
    <section className="suggestions__banner">
      <div className="suggestions-banner__suggestion">
        <div className="suggestion-banner__suggestion-media">
          <img
            src="/assets/images/banners/privacy-policy-generator.svg"
            alt="privacy policy"
            className="suggestions-banner__suggestion-img"
          />
          <p className="suggestions-banner__suggestion-title">
            Privacy Policy Generator
          </p>
        </div>
        <p className="suggestions-banner__suggestion-subtitle">
          Stock your store with 100s of products and start selling to customers
          in minutes, without the hassle of inventory or packaging.
        </p>
      </div>
      <div className="suggestions-banner__suggestion">
        <img
          src="/assets/images/banners/terms-conditions-generator.svg"
          alt="terms-conditions"
          className="suggestions-banner__suggestion-img"
        />
        <p className="suggestions-banner__suggestion-title">
          Terms & Conditions Generator
        </p>
        <p className="suggestions-banner__suggestion-subtitle">
          Stock your store with 100s of products and start selling to customers
          in minutes, without the hassle of inventory or packaging.
        </p>
      </div>
      <div className="suggestions-banner__suggestion">
        <img
          src="/assets/images/banners/domain-name-generator.svg"
          alt="domain-name"
          className="suggestions-banner__suggestion-img"
        />
        <p className="suggestions-banner__suggestion-title">
          Domain Name Generator
        </p>
        <p className="suggestions-banner__suggestion-subtitle">
          Stock your store with 100s of products and start selling to customers
          in minutes, without the hassle of inventory or packaging.
        </p>
      </div>
      <div className="suggestions-banner__suggestion">
        <img
          src="/assets/images/banners/invoice-generator.svg"
          alt="invoice"
          className="suggestions-banner__suggestion-img"
        />
        <p className="suggestions-banner__suggestion-title">
          Invoice Generator
        </p>
        <p className="suggestions-banner__suggestion-subtitle">
          Stock your store with 100s of products and start selling to customers
          in minutes, without the hassle of inventory or packaging.
        </p>
      </div>
    </section>
  );
};

export { SuggestionsBanner };
