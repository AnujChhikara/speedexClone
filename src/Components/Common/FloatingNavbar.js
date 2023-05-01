import React, { useState, useEffect } from "react";

function FloatNav() {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrollingUp = prevScrollPos > currentScrollPos;
      const isCloseToTop = currentScrollPos < 200;

      if (isScrollingUp && !isCloseToTop) {
        setIsVisible(true);
      } else if (isCloseToTop) {
        setIsVisible(false);
      } else {
        setIsVisible(false);
      }

      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);
  return (
    <div className="fixed w-screen mt-20">
      <div
        className={` flex justify-center  ${
          isVisible ? "block" : "hidden"
        } cursor-pointer `}
      >
        {" "}
        <div className="bg-red-300 transition-all duration-1000  ">
          Floating Navbar
        </div>
      </div>
    </div>
  );
}
export default FloatNav;
