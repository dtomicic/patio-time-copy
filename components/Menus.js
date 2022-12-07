import menusStyles from "../styles/Menus.module.css";

const Menus = () => {
  return (
    <div className={menusStyles.section}>
      <div className={menusStyles.item}>
        <div className={menusStyles.pictureContainer}>
          <div
            className={`${menusStyles["itemPicture"]} ${menusStyles["picture1"]}`}
          ></div>
        </div>
        <h3 className={menusStyles.itemText}>Lunch menu</h3>
      </div>
      <div className={menusStyles.item}>
        <div className={menusStyles.pictureContainer}>
          <div
            className={`${menusStyles["itemPicture"]} ${menusStyles["picture2"]}`}
          ></div>
        </div>
        <h3 className={menusStyles.itemText}>Dinner menu</h3>
      </div>
      <div className={menusStyles.item}>
        <div className={menusStyles.pictureContainer}>
          <div
            className={`${menusStyles["itemPicture"]} ${menusStyles["picture3"]}`}
          ></div>
        </div>
        <h3 className={menusStyles.itemText}>Wines & cocktails</h3>
      </div>
      <div className={menusStyles.item}>
        <div className={menusStyles.pictureContainer}>
          <div
            className={`${menusStyles["itemPicture"]} ${menusStyles["picture4"]}`}
          ></div>
        </div>
        <h3 className={menusStyles.itemText}>Desserts menu</h3>
      </div>
    </div>
  );
};
export default Menus;
