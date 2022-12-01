import Navigation from "../components/Navigation";
import homeStyles from "../styles/Home.module.css";
import {AiFillStar} from "react-icons/ai";

export default function Home() {
  return (
    <>
      <Navigation />
      <div className={homeStyles.header}>
        <div className={homeStyles.headerOverlay} />
        <div className={homeStyles.headerImage}></div>
        <div className={homeStyles.headerText}>
          <h1 className={homeStyles.headerTextMain}>An extraordinary dining experience</h1>
          <div className={homeStyles.headerStars}>
            <AiFillStar className={homeStyles.headerStarsItem} />
            <AiFillStar className={homeStyles.headerStarsItem} />
            <AiFillStar className={homeStyles.headerStarsItem} />
          </div>
          <p className={homeStyles.headerTextSub}>The finest prime steak. Exquisite wines. Genuine service</p>
          <button className={homeStyles.headerButton}>Discover menus</button>
        </div>
      </div>
    </>
  );
}
