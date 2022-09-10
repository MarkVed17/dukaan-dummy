import "./SloganMaker.css";
import toast from "react-hot-toast";

const SloganMaker = () => {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    toast("Copied!");
  };

  return (
    <section className="slogan-maker">
      <div className="slogan-maker-input">
        <div className="slogan-maker__input-area">
          <div className="slogan-maker__heading">
            <h1 className="slogan-maker__heading-title">Free slogan maker</h1>
            <p className="slogan-maker__heading-subtitle">
              Simply enter a term that describes your business, and get up to
              1,000 relevant slogans for free.
            </p>
          </div>
          <div className="slogan-maker__action">
            <div className="slogan-maker__action-input">
              <label className="slogan-maker__label">
                Word for your slogan
              </label>
              <input
                type="search"
                className="slogan-maker__input"
                placeholder="cozy"
              />
            </div>
            <button className="slogan-maker__button">Generate slogans</button>
          </div>
        </div>
      </div>
      <div className="slogan-maker-output">
        <div className="slogan-maker__results-heading">
          <p className="slogan-maker__result">
            We have generated 1,023 slogans for “cozy”
          </p>
          <button className="slogan-maker__download-btn">Download all</button>
        </div>
        <div className="slogan-maker__slogans">
          <div
            className="slogan-maker__slogan"
            onClick={(e) => copyToClipboard(e.target.innerText)}
          >
            There is no Sore it will Not Heal, No cool it will not Subdue.
          </div>
          <div
            className="slogan-maker__slogan"
            onClick={(e) => copyToClipboard(e.target.innerText)}
          >
            coziness building for tomorrow
          </div>
          <div
            className="slogan-maker__slogan"
            onClick={(e) => copyToClipboard(e.target.innerText)}
          >
            There is no Sore it will Not Heal, No cool it will not Subdue.
          </div>
          <div
            className="slogan-maker__slogan"
            onClick={(e) => copyToClipboard(e.target.innerText)}
          >
            coziness building for tomorrow
          </div>
          <div
            className="slogan-maker__slogan"
            onClick={(e) => copyToClipboard(e.target.innerText)}
          >
            There is no Sore it will Not Heal, No cool it will not Subdue.
          </div>
          <div
            className="slogan-maker__slogan"
            onClick={(e) => copyToClipboard(e.target.innerText)}
          >
            coziness building for tomorrow
          </div>
          <div
            className="slogan-maker__slogan"
            onClick={(e) => copyToClipboard(e.target.innerText)}
          >
            There is no Sore it will Not Heal, No cool it will not Subdue.
          </div>
          <div
            className="slogan-maker__slogan"
            onClick={(e) => copyToClipboard(e.target.innerText)}
          >
            coziness building for tomorrow
          </div>
          <div
            className="slogan-maker__slogan"
            onClick={(e) => copyToClipboard(e.target.innerText)}
          >
            There is no Sore it will Not Heal, No cool it will not Subdue.
          </div>
          <div
            className="slogan-maker__slogan"
            onClick={(e) => copyToClipboard(e.target.innerText)}
          >
            coziness building for tomorrow
          </div>
          <div
            className="slogan-maker__slogan"
            onClick={(e) => copyToClipboard(e.target.innerText)}
          >
            There is no Sore it will Not Heal, No cool it will not Subdue.
          </div>
          <div
            className="slogan-maker__slogan"
            onClick={(e) => copyToClipboard(e.target.innerText)}
          >
            coziness building for tomorrow
          </div>
          <div
            className="slogan-maker__slogan"
            onClick={(e) => copyToClipboard(e.target.innerText)}
          >
            There is no Sore it will Not Heal, No cool it will not Subdue.
          </div>
          <div
            className="slogan-maker__slogan"
            onClick={(e) => copyToClipboard(e.target.innerText)}
          >
            coziness building for tomorrow
          </div>
          <div
            className="slogan-maker__slogan"
            onClick={(e) => copyToClipboard(e.target.innerText)}
          >
            There is no Sore it will Not Heal, No cool it will not Subdue.
          </div>
          <div
            className="slogan-maker__slogan"
            onClick={(e) => copyToClipboard(e.target.innerText)}
          >
            coziness building for tomorrow
          </div>
          <div
            className="slogan-maker__slogan"
            onClick={(e) => copyToClipboard(e.target.innerText)}
          >
            There is no Sore it will Not Heal, No cool it will not Subdue.
          </div>
          <div
            className="slogan-maker__slogan"
            onClick={(e) => copyToClipboard(e.target.innerText)}
          >
            coziness building for tomorrow
          </div>
        </div>
      </div>
    </section>
  );
};

export { SloganMaker };
