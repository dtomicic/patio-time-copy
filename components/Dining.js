import diningStyles from "../styles/Dining.module.css";

const Dining = () => {
  return (
    <div className={diningStyles.container}>
      <div className={diningStyles.allContent}>
        <div className={diningStyles.pictures}>
          <div className={diningStyles.picturesFirst}>
            <img
              src="/images/atmosphere1.jpg"
              alt="dining1"
              className={diningStyles.picturesImage}
            />
          </div>

          <div className={diningStyles.picturesSecond}>
            <img
              src="/images/atmosphere2.jpg"
              alt="dining2"
              className={diningStyles.picturesImage}
            />
          </div>
        </div>
        <div className={diningStyles.content}>
          <h3 className={diningStyles.contentSubHeader}>Dining experience</h3>
          <h2 className={diningStyles.contentHeader}>Unrivaled atmosphere</h2>
          <img
            src="/images/steakhouse-label.png"
            alt="steakhouse label"
            className={diningStyles.contentLabel}
          />
          <p className={diningStyles.contentParagraph}>
            Enjoy an elegant and vibrant atmosphere, great live music, eclectic
            wines and handcrafted cocktails. We are committed to delivering an
            unforgettable dining experience with impeccable service.
          </p>
          <div className={diningStyles.contentBtn}>
            <h3 className={diningStyles.contentBtnText}>Discover more</h3>
            <div className={diningStyles.contentBtnLine}></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dining;
