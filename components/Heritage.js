import heritageStyles from "../styles/Heritage.module.css";

const Heritage = () => {
  return (
    <div className={heritageStyles.heritageSection}>
      <div className={heritageStyles.heritageFirst}>
        <span className={heritageStyles.heritageFirstSubHeader}>
          Our heritage
        </span>
        <h2 className={heritageStyles.heritageFirstHeader}>
          An american steakhouse
        </h2>
        <p className={heritageStyles.heritageFirstText}>
          Patio Time Steakhouse is a classic American steakhouse. Rooted in
          classic tradition, we provide customers with an elegant and vibrant
          dining atmosphere, award-winning cuisine and impeccable wines, making
          every meal with us an unforgettable experience.{" "}
        </p>
        <div className={heritageStyles.heritageFirstBtn}>
          <span className={heritageStyles.heritageFirstBtnText}>Discover more</span>
          <div className={heritageStyles.heritageFirstBtnLine}></div>
        </div>
      </div>
      <div className={heritageStyles.heritageSecond}>
        <img src='/images/heritage.jpg' alt='heritage' className={heritageStyles.heritageSecondImage} />
      </div>
    </div>
  );
};
export default Heritage;
