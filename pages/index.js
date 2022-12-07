import Menus from "../components/Menus";
import Gallery from "../components/Gallery";
import Header from "../components/Header";
import Heritage from "../components/Heritage";
import Navigation from "../components/Navigation";
import homeStyles from "../styles/Home.module.css";
import Dining from "../components/Dining";

export default function Home() {
  return (
    <div className={homeStyles.main}>
      <Navigation/>
      <Header />
      <Heritage />
      <Gallery />
      <Menus />
      <Dining />
    </div>
  );
}
