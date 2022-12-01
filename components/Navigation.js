import navStyles from "../styles/Navigation.module.css";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { MdLocationPin, MdLocalPhone, MdEmail } from "react-icons/md";
import { useState } from "react";

const Navigation = () => {
  const [openNav, setOpenNav] = useState(false);

  const toggleNav = () => {
    setOpenNav(!openNav);
  };

  return (
    <nav className={navStyles.navigation}>
        {openNav ? <style jsx global>{`body {overflow: hidden;}`}</style> : '' }
      {/* Mobile navigation */}
      <div className={navStyles.mobileNav}>
        <div className={navStyles.navbarPhone}>
          <div className={navStyles.navbarPhoneLogo}>
            <img
              src="/images/logo.png"
              alt="logo"
              className={navStyles.navbarPhoneLogoImage}
            />
          </div>
          <div className={navStyles.navbarPhoneMenu}>
            <HiMenuAlt4
              className={navStyles.navbarPhoneMenuIcon}
              onClick={toggleNav}
            />
          </div>
        </div>
        <div
          className={`${navStyles["navbarBlack"]} ${
            openNav ? navStyles["showNav"] : ""
          }`}
        ></div>
        <div
          className={`${navStyles["navbarOverlay"]} ${
            openNav ? navStyles["showNav"] : ""
          }`}
        >
          <div className={navStyles.hamburgerMenu}>
            <div className={navStyles.navbarPhoneLogo}>
              <img
                src="/images/logo.png"
                alt="logo"
                className={navStyles.navbarPhoneLogoImage}
              />
            </div>
            <div className={navStyles.navbarPhoneMenu}>
              <AiOutlineClose
                className={navStyles.navbarPhoneMenuIcon}
                onClick={toggleNav}
              />
            </div>
          </div>
          <hr className={navStyles.navbarLine}></hr>
          <div className={navStyles.navbarOverlayMenu}>
            <ul className={navStyles.navbarOverlayMenuList}>
              <li className={navStyles.navbarOverlayMenuListItem}>
                <a href="#" className={navStyles.navbarOverlayMenuListItemLink}>
                  Home
                </a>
              </li>
              <li className={navStyles.navbarOverlayMenuListItem}>
                <a href="#" className={navStyles.navbarOverlayMenuListItemLink}>
                  About
                </a>
              </li>
              <li className={navStyles.navbarOverlayMenuListItem}>
                <a href="#" className={navStyles.navbarOverlayMenuListItemLink}>
                  Menus
                </a>
              </li>
              <li className={navStyles.navbarOverlayMenuListItem}>
                <a href="#" className={navStyles.navbarOverlayMenuListItemLink}>
                  Private Dining
                </a>
              </li>
              <li className={navStyles.navbarOverlayMenuListItem}>
                <a href="#" className={navStyles.navbarOverlayMenuListItemLink}>
                  Reservations
                </a>
              </li>
              <li className={navStyles.navbarOverlayMenuListItem}>
                <a href="#" className={navStyles.navbarOverlayMenuListItemLink}>
                  News
                </a>
              </li>
              <li className={navStyles.navbarOverlayMenuListItem}>
                <a href="#" className={navStyles.navbarOverlayMenuListItemLink}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className={navStyles.navbarOverlaySocials}>
            <FaFacebookF className={navStyles.navbarOverlaySocialsIcon} />
            <FaTwitter className={navStyles.navbarOverlaySocialsIcon} />
            <FaInstagram className={navStyles.navbarOverlaySocialsIcon} />
          </div>
          <hr className={navStyles.navbarLine}></hr>
        </div>
      </div>
      {/* End mobile navigation */}

      {/* Desktop navigation */}
      <div className={navStyles.desktopNav}>
        <div className={navStyles.navbarTop}>
          <div className={navStyles.navbarTopLeft}>
            <div className={navStyles.navbarTopLeftItem}>
              <MdLocationPin className={navStyles.navbarTopLeftItemIcon} />
              <p className={navStyles.navbarTopLeftItemText}>
                Silk St, Barbican, London EC2Y 8DS, UK
              </p>
            </div>
          </div>
          <div className={navStyles.navbarTopRight}>
            <div className={navStyles.navbarTopRightItem}>
              <MdLocalPhone className={navStyles.navbarTopRightItemIcon} />
              <p className={navStyles.navbarTopRightItemText}>
                +1-212-555-6767
              </p>
            </div>
            <div className={navStyles.navbarTopRightItem}>
              <MdEmail className={navStyles.navbarTopRightItemIcon} />
              <p className={navStyles.navbarTopRightItemText}>
                booking@patiotime
              </p>
            </div>
          </div>
        </div>
        <hr className={navStyles.desktopNavbarLine}></hr>
        <div className={navStyles.navbarBottom}>
          <div className={navStyles.navbarBottomLeft}>
            <img
              src="/images/logo.png"
              alt="logo"
              className={navStyles.navbarBottomLeftLogo}
            />
          </div>
          <div className={navStyles.navbarBottomCenter}>
            <ul className={navStyles.navbarBottomCenterList}>
              <li className={navStyles.navbarBottomCenterListItem}>
                <a
                  href="#"
                  className={navStyles.navbarBottomCenterListItemLink}
                >
                  Home
                </a>
              </li>
              <li className={navStyles.navbarBottomCenterListItem}>
                <a
                  href="#"
                  className={navStyles.navbarBottomCenterListItemLink}
                >
                  About
                </a>
              </li>
              <li className={navStyles.navbarBottomCenterListItem}>
                <a
                  href="#"
                  className={navStyles.navbarBottomCenterListItemLink}
                >
                  Menus
                </a>
              </li>
              <li className={navStyles.navbarBottomCenterListItem}>
                <a
                  href="#"
                  className={navStyles.navbarBottomCenterListItemLink}
                >
                  Private Dining
                </a>
              </li>
              <li className={navStyles.navbarBottomCenterListItem}>
                <a
                  href="#"
                  className={navStyles.navbarBottomCenterListItemLink}
                >
                  Reservations
                </a>
              </li>
              <li className={navStyles.navbarBottomCenterListItem}>
                <a
                  href="#"
                  className={navStyles.navbarBottomCenterListItemLink}
                >
                  News
                </a>
              </li>
              <li className={navStyles.navbarBottomCenterListItem}>
                <a
                  href="#"
                  className={navStyles.navbarBottomCenterListItemLink}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className={navStyles.navbarBottomRight}>
            <button className={navStyles.navbarBottomRightBtn}>
              Find a table
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navigation;
