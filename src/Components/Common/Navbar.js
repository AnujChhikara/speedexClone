import { useState } from "react";
import SidebarMenu from "./SideBar";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <SidebarMenu isOpen={isOpen} onClose={onClose} />
      <div className="flex justify-evenly items-center pt-10">
        <div className="flex space-x-6 text-gray-600 ">
          <a
            className="hover:text-gray-900 hover:underline"
            onClick={toggleMenu}
            href="#"
          >
            SHOP
          </a>
          <a className="hover:text-gray-900 hover:underline" href="#">
            CO-BRAND
          </a>
          <a className="hover:text-gray-900 hover:underline" href="#">
            DISCOVER
          </a>
        </div>
        <div>
          <img
            className="w-48"
            src="https://speedexind.com/wp-content/uploads/2022/11/Speedex-gold.png"
            alt="imgae"
          />
        </div>
        <div className="flex space-x-8 items-center">
          <a href="#">
            <h3 className="hover:underline hover:opacity-50">REFER A FRIEND</h3>
          </a>
          <a href="#">
            {" "}
            <div className="flex space-x-1 items-center">
              <svg
                className="w-6 hover:fill-gray-200"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2 2C1.44772 2 1 2.44772 1 3C1 3.55228 1.44772 4 2 4H2.47241C2.92336 4 3.31852 4.30182 3.43717 4.73688L3.85342 6.26312L6 14.1339V16C6 16.6935 6.23533 17.3321 6.63048 17.8402C6.23824 18.2816 6 18.863 6 19.5C6 20.8807 7.11929 22 8.5 22C9.88071 22 11 20.8807 11 19.5C11 19.3288 10.9828 19.1616 10.95 19H14.05C14.0172 19.1616 14 19.3288 14 19.5C14 20.8807 15.1193 22 16.5 22C17.8807 22 19 20.8807 19 19.5C19 19.1715 18.9366 18.8578 18.8215 18.5704C18.934 18.4086 19 18.212 19 18C19 17.4477 18.5523 17 18 17H16.5H9C8.44772 17 8 16.5523 8 16V15H18.236C19.1381 15 19.9285 14.3962 20.1657 13.5258L21.8007 7.52583C22.1473 6.25364 21.1896 5 19.871 5H5.58198L5.3667 4.21065C5.01074 2.90547 3.82526 2 2.47241 2H2ZM16.5 19C16.2239 19 16 19.2239 16 19.5C16 19.7761 16.2239 20 16.5 20C16.7761 20 17 19.7761 17 19.5C17 19.2239 16.7761 19 16.5 19ZM18.236 13H7.7638L6.12743 7H19.871L18.236 13ZM8.5 19C8.22386 19 8 19.2239 8 19.5C8 19.7761 8.22386 20 8.5 20C8.77614 20 9 19.7761 9 19.5C9 19.2239 8.77614 19 8.5 19Z"
                  fill="#000000"
                />
              </svg>
              <h4>0 items</h4>
            </div>
          </a>

          <svg
            className="w-8 "
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17 17L21 21"
              stroke="#323232"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
              stroke="#323232"
              stroke-width="2"
            />
          </svg>

          <svg
            className="w-8 hover:fill-zinc-800 hover:scale-105 duration-500"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0h48v48H0z" fill="none" />
            <g id="Shopicon">
              <path d="M33.843,26.914L24,36l-9.843-9.086C8.674,30.421,5,36.749,5,44h38C43,36.749,39.326,30.421,33.843,26.914z" />
              <path
                d="M24,28c3.55,0,6.729-1.55,8.926-4C34.831,21.876,36,19.078,36,16c0-6.627-5.373-12-12-12S12,9.373,12,16
    c0,3.078,1.169,5.876,3.074,8C17.271,26.45,20.45,28,24,28z"
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
