import { AiFillStar } from "react-icons/ai";
import headerStyles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div className={headerStyles.header}>
        <div className={headerStyles.headerOverlay} />
        <div className={headerStyles.headerImage}></div>
        <div className={headerStyles.headerText}>
          <h1 className={headerStyles.headerTextMain}>
            An extraordinary dining experience
          </h1>
          <div className={headerStyles.headerStars}>
            <AiFillStar className={headerStyles.headerStarsItem} />
            <AiFillStar className={headerStyles.headerStarsItem} />
            <AiFillStar className={headerStyles.headerStarsItem} />
          </div>
          <p className={headerStyles.headerTextSub}>
            The finest prime steak. Exquisite wines. Genuine service
          </p>
          <button className={headerStyles.headerButton}>Discover menus</button>
        </div>
      </div>
  )
}
export default Header