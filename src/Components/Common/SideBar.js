import { slide as Menu } from "react-burger-menu";

function SidebarMenu() {
  const styles = {
    bmBurgerButton: {
      position: "fixed",
      width: "36px",
      height: "30px",
      left: "20px",
      top: "20px",
    },
    bmBurgerBars: {
      background: "#373a47",
    },
    bmCrossButton: {
      height: "24px",
      width: "24px",
    },
    bmCross: {
      background: "#bdc3c7",
    },
    bmMenuWrap: {
      position: "fixed",
      height: "100%",
    },
    bmMenu: {
      background: "#373a47",
      padding: "2.5em 1.5em 0",
      fontSize: "1.15em",
    },
    bmMorphShape: {
      fill: "#373a47",
    },
    bmItemList: {
      color: "#b8b7ad",
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
    <Menu styles={styles} width={500}>
      <a
        className="menu-item flex justify-around items-center space-x-4"
        href="/single-wall"
      >
        Single Wall{" "}
        <img
          src="https://speedexind.com/wp-content/uploads/2023/02/SINGLE-WALL.png"
          alt=""
        />
      </a>
      <a className="menu-item" href="/hot-n-cold">
        Hot & Cold
      </a>
      <a className="menu-item" href="/contact">
        Feeding Bottle
      </a>
      <a className="menu-item" href="/contact">
        Atelier
      </a>
    </Menu>
  );
}

export default SidebarMenu;
