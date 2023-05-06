import { useState } from "react";
import { Fade as Hamburger } from "hamburger-react";
import { fallDown as Menu } from "react-burger-menu";
import AOS from "aos";

import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init({
  duration: 1500,
});

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => {
    setIsOpen(false);
  };
  const styles = {
    bmBurgerButton: {
      position: "fixed",
      width: "0",
      height: "0",
      left: "0",
      top: "",
    },

    bmMenuWrap: {
      position: "fixed",
      height: "45%",
      margin: "0px 0",
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
      padding: "1em",
    },
    bmItem: {
      display: "flex",
      margin: "0 28px 0 0 ",
    },
    bmOverlay: {
      background: "rgba(0, 0, 0, 0.3)",
    },
  };

  return (
    <div>
      {/* <div className="bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 ">
            <h2 className="font-medium text-center w-screen py-0.5">
              Hydration Made Affordable!
            </h2>
          </div> */}

      <div className="py-2 space-x-20 bg-white flex justify-center items-center">
        <div className="-ml-6">
          <Hamburger
            size={22}
            toggled={isOpen}
            toggle={setIsOpen}
            duration={0.5}
            direction="right"
          />
        </div>
        <div>
          <a href="/">
            <img
              className="w-12 "
              src="https://jkrisk.in/speedex/wp-content/uploads/2022/11/small-Logo.png"
              alt="Logoimgae"
            />
          </a>
        </div>
        <div>
          <svg
            className="w-6 hover:fill-gray-200"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2 2C1.44772 2 1 2.44772 1 3C1 3.55228 1.44772 4 2 4H2.47241C2.92336 4 3.31852 4.30182 3.43717 4.73688L3.85342 6.26312L6 14.1339V16C6 16.6935 6.23533 17.3321 6.63048 17.8402C6.23824 18.2816 6 18.863 6 19.5C6 20.8807 7.11929 22 8.5 22C9.88071 22 11 20.8807 11 19.5C11 19.3288 10.9828 19.1616 10.95 19H14.05C14.0172 19.1616 14 19.3288 14 19.5C14 20.8807 15.1193 22 16.5 22C17.8807 22 19 20.8807 19 19.5C19 19.1715 18.9366 18.8578 18.8215 18.5704C18.934 18.4086 19 18.212 19 18C19 17.4477 18.5523 17 18 17H16.5H9C8.44772 17 8 16.5523 8 16V15H18.236C19.1381 15 19.9285 14.3962 20.1657 13.5258L21.8007 7.52583C22.1473 6.25364 21.1896 5 19.871 5H5.58198L5.3667 4.21065C5.01074 2.90547 3.82526 2 2.47241 2H2ZM16.5 19C16.2239 19 16 19.2239 16 19.5C16 19.7761 16.2239 20 16.5 20C16.7761 20 17 19.7761 17 19.5C17 19.2239 16.7761 19 16.5 19ZM18.236 13H7.7638L6.12743 7H19.871L18.236 13ZM8.5 19C8.22386 19 8 19.2239 8 19.5C8 19.7761 8.22386 20 8.5 20C8.77614 20 9 19.7761 9 19.5C9 19.2239 8.77614 19 8.5 19Z"
              fill="#000000"
            />
          </svg>
        </div>
      </div>
      <div className={`w-screen bg-white`}>
        <Menu isOpen={isOpen} onClose={onClose} styles={styles} width={400}>
          <div className="flex flex-col space-y-6 md:pt-20 justify-center lg:text-lg sm:text-sm font-medium ">
            <a
              className="menu-item flex rounded-xl  duration-500 justify-around items-center space-x-6"
              href="/single-wall"
            >
              Single Wall
              <img
                className="md:w-28 sm:w-16"
                src="https://speedexind.com/wp-content/uploads/2023/04/S-WALL-icon.png"
                alt=""
              />
            </a>
            <a
              className="menu-item rounded-xl  duration-500 flex justify-around items-center space-x-6"
              href="/hot-n-cold"
            >
              Hot & Cold
              <img
                className="md:w-28 sm:w-16"
                src="https://speedexind.com/wp-content/uploads/2023/04/hot2.png"
                alt=""
              />
            </a>
            <a
              className="menu-item flex  rounded-xlduration-500 justify-around items-center space-x-6"
              href="/Atelier"
            >
              Atelier{" "}
              <img
                className="md:w-28 sm:w-16"
                src="https://speedexind.com/wp-content/uploads/2023/04/artisttic.png"
                alt=""
              />
            </a>
            <a
              className="menu-item flex  rounded-xl  duration-500 justify-around items-center space-x-6"
              href="/feeding-bottles"
            >
              Feeding Bottle
              <img
                className="md:w-28 sm:w-16"
                src="https://speedexind.com/wp-content/uploads/2023/03/feeding-icon.png"
                alt=""
              />
            </a>
          </div>
        </Menu>
      </div>
    </div>
  );
}

export default MobileNav;
