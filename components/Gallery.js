import galleryStyles from "../styles/Gallery.module.css";
const Gallery = () => {
  return (
    <div className={galleryStyles.gallery}>
      <div className={galleryStyles.galleryFirst}>
        <div className={galleryStyles.galleryFirstPicture}></div>
      </div>
      <div className={galleryStyles.gallerySecond}>
        <div className={galleryStyles.gallerySecondCard}>
            <div className={`${galleryStyles['gallerySecondCardPicture']} ${galleryStyles['galleryPicture1']}`}></div>
            <div className={galleryStyles.gallerySecondCardText}>
                <h1 className={galleryStyles.gallerySecondCardTextHeader}>Dry-aged beef</h1>
                <p className={galleryStyles.gallerySecondCardTextContent}>All of our prime steaks and chops are dry-aged on-site and served by dedicated staff with extensive steakhouse experience.</p>
                <div className={galleryStyles.gallerySecondCardTextBtn}>
                    <h4>Discover more</h4>
                    <div className={galleryStyles.gallerySecondCardTextBtnLine}></div>
                </div>
            </div>
        </div>
        <div className={`${galleryStyles['gallerySecondCard']} ${galleryStyles['gallerySecondCardInverted']}`}>
            <div className={`${galleryStyles['gallerySecondCardPicture']} ${galleryStyles['galleryPicture2']}`}></div>
            <div className={galleryStyles.gallerySecondCardText}>
                <h1 className={galleryStyles.gallerySecondCardTextHeader}>Classic flavour</h1>
                <p className={galleryStyles.gallerySecondCardTextContent}>All of our prime steaks and chops are dry-aged on-site and served by dedicated staff with extensive steakhouse experience.</p>
                <div className={galleryStyles.gallerySecondCardTextBtn}>
                    <h4>Discover more</h4>
                    <div className={galleryStyles.gallerySecondCardTextBtnLine}></div>
                </div>
            </div>
        </div>
        <div className={galleryStyles.gallerySecondCard}>
            <div className={`${galleryStyles['gallerySecondCardPicture']} ${galleryStyles['galleryPicture3']}`}></div>
            <div className={galleryStyles.gallerySecondCardText}>
                <h1 className={galleryStyles.gallerySecondCardTextHeader}>Wine tasting</h1>
                <p className={galleryStyles.gallerySecondCardTextContent}>All of our prime steaks and chops are dry-aged on-site and served by dedicated staff with extensive steakhouse experience.</p>
                <div className={galleryStyles.gallerySecondCardTextBtn}>
                    <h4>Discover more</h4>
                    <div className={galleryStyles.gallerySecondCardTextBtnLine}></div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};
export default Gallery;
