import { slide as Menu } from "react-burger-menu";

function SidebarMenu(props) {
  const styles = {
    bmBurgerButton: {
      position: "fixed",
      width: "0",
      height: "0",
      left: "0",
      top: "0",
    },
    bmBurgerBars: {
      background: "#373a47",
    },
    bmCrossButton: {
      height: "40px",
      width: "40px",
      margin: "20px",
    },
    bmCross: {
      background: "black",
      height: "20px",
    },
    bmMenuWrap: {
      position: "fixed",
      height: "100%",
    },
    bmMenu: {
      background: "white",
      padding: "2.5em 1.5em 0",
      fontSize: "1.15em",
    },
    bmMorphShape: {
      fill: "#373a47",
    },
    bmItemList: {
      color: "black",
      padding: "0.8em",
    },
    bmItem: {
      display: "flex",
    },
    bmOverlay: {
      background: "rgba(0, 0, 0, 0.3)",
    },
  };

  return (
    <Menu
      isOpen={props.isOpen}
      onClose={props.onClose}
      styles={styles}
      width={500}
    >
      <div className="flex flex-col space-y-10 pt-20 justify-center text-lg font-medium ">
        <a
          className="menu-item flex justify-around items-center space-x-6"
          href="/single-wall"
        >
          Single Wall{" "}
          <img
            src="https://speedexind.com/wp-content/uploads/2023/02/SINGLE-WALL.png"
            alt=""
          />
        </a>
        <a
          className="menu-item flex justify-around items-center space-x-6"
          href="/hot-n-cold"
        >
          Hot & Cold
          <img
            src="https://speedexind.com/wp-content/uploads/2023/02/DOUBLE-WALL.png"
            alt=""
          />
        </a>
        <a
          className="menu-item flex justify-around items-center space-x-6"
          href="/feeding-bottles"
        >
          Feeding Bottle
          <img
            src="https://speedexind.com/wp-content/uploads/2023/03/feeding-icon.png"
            alt=""
          />
        </a>
        <a
          className="menu-item flex justify-around items-center space-x-6"
          href="/contact"
        >
          Atelier{" "}
          <img
            className="w-36"
            src="https://speedexind.com/wp-content/uploads/2023/03/banner3.webp"
            alt=""
          />
        </a>
      </div>
    </Menu>
  );
}

export default SidebarMenu;
