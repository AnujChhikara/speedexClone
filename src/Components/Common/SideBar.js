import { slide as Menu } from "react-burger-menu";

import { Link } from "react-router-dom";

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
      padding: "",
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
      background: "rgba(0, 0, 0, 0.)",
    },
  };

  return (
    <Menu
      isOpen={props.isOpen}
      onClose={props.onClose}
      styles={styles}
      width={props.width}
    >
      <div className="flex flex-col space-y-4 md:pt-20 sm:pt-12 justify-center lg:text-lg sm:text-sm font-medium ">
        <Link onClick={props.handleClick}
          className="menu-item flex bg-gray-100 hover:bg-gray-200 rounded-xl py-2 duration-500 justify-around items-center space-x-6"
          to="/single-wall"
        >
          Single Wall
          <img
            className="md:w-28 sm:w-16"
            src="https://speedexind.com/wp-content/uploads/2023/04/S-WALL-icon.png"
            alt=""
          />
        </Link>
        <Link onClick={props.handleClick}
          className="menu-item bg-gray-100 hover:bg-gray-200 py-2 rounded-xl  duration-500 flex justify-around items-center space-x-6"
          to="/hot-n-cold"
        >
          Hot & Cold
          <img
            className="md:w-28 sm:w-16"
            src="https://speedexind.com/wp-content/uploads/2023/04/hot2.png"
            alt=""
          />
        </Link>
        <Link onClick={props.handleClick}
          className="menu-item flex bg-gray-100 hover:bg-gray-200 rounded-xl  py-2 duration-500 justify-around items-center space-x-6"
          to="/Atelier"
        >
          Atelier{" "}
          <img
            className="md:w-28 sm:w-16"
            src="https://speedexind.com/wp-content/uploads/2023/04/artisttic.png"
            alt=""
          />
        </Link>
        <Link onClick={props.handleClick}
          className="menu-item flex bg-gray-100 hover:bg-gray-200 rounded-xl  py-2 duration-500 justify-around items-center space-x-6"
          to="/feeding-bottles"
        >
          Feeding Bottle
          <img
            className="md:w-28 sm:w-16"
            src="https://speedexind.com/wp-content/uploads/2023/03/feeding-icon.png"
            alt=""
          />
        </Link>
      </div>
    </Menu>
  );
}

export default SidebarMenu;
