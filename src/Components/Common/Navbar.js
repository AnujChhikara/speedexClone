import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import SidebarMenu from "./SideBar";
import MobileNav from "./MobillNavbar";
import TopBar from "./topBar";
import { useSelector } from 'react-redux';
import UserProfile from "../utils/userProfile";


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const totalQuantity =  useSelector((state) => state.cart.totalQuantity)
  const userData =  useSelector((state) => state.user)
  

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const onClose = () => {
    setIsOpen(false);
  };

  function handleClick(){
    setIsOpen(false)
  }
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={` ${isHome ? "bg" : ""}   `}>
      {isDesktop ? (
        <div className="fixed font-bold w-full z-10 top-0 bg-white pb-3 shadow-xl text-gray-500 text-sm">
          <SidebarMenu
            isOpen={isOpen}
            onClose={onClose}
            width={450}
            itemWidth={20}
            handleClick={handleClick}
          />
            <TopBar/>
          
          <div className="flex justify-around items-center pt-2">
        
            <div className="flex lg:space-x-6 text-gray-600 ">
              <h3
                className="hover:text-gray-900 hover:underline cursor-pointer"
                onClick={toggleMenu}
              >
                SHOP
              </h3>
              <Link
                className="hover:text-gray-900 hover:underline"
                to="/co-brand"
              >
                CO-BRAND
              </Link>
              <Link className="hover:text-gray-900 hover:underline" to="/">
                DISCOVER
              </Link>
            </div>
            <div>
              <Link to="/">
                <img
                  className="w-24 "
                  src="https://speedexind.com/wp-content/uploads/2022/11/logo-final.webp"
                  alt="Logoimgae"
                />
              </Link>
            </div>
            <div className="flex space-x-8 items-center">
              <Link to="/">
                <h3 className="hover:underline hover:opacity-50">
                  REFER A FRIEND
                </h3>
              </Link>
              <Link to="/cart">
                {" "}
                <div className="flex space-x-1 items-center">
                  <svg
                    className="w-4 hover:fill-gray-200"
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
                  <h4>
                  {totalQuantity}  items
                  </h4>
                </div>
              </Link>
             <UserProfile userData={userData}/>

            </div>
          </div>
        </div>
      ) : (
        <div className="fixed w-full z-10 top-0 ">
          <TopBar/>
          <MobileNav totalQuantity={totalQuantity} />
        </div>
      )}
    </div>
  );
}
export default Navbar;
