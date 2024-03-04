import React from 'react'

function BottleViewPageImg({selectedCap, allBottles}) {
  return (
    <img
                src={selectedCap.img}
                alt=""
                className={`${
                  allBottles.id === "Hydrate"
                    ? selectedCap.id === "Cap1"
                      ? "top-[-12%] right-0.5 scale-125"
                      : selectedCap.id === "Cap2"
                      ? " top-[-16%] right-1.5 scale-125"
                      : " top-[-13%] right-1 scale-125"
                    : allBottles.id === "Drip Trip"
                    ? "absolute -top-0.5 scale-105"
                    : allBottles.id === "Kurvey"
                    ? selectedCap.id === "Cap1"
                      ? " top-[-9%] right-0.5 scale-125"
                      : selectedCap.id === "Cap2"
                      ? " top-[-11.5%] right-1.5 scale-125"
                      : " top-[-9.7%] right-0.5 scale-125"
                    : allBottles.id === "Glacia"
                    ? selectedCap.id === "Cap1"
                      ? " top-[-4%] -right-1.5 scale-110 "
                      : selectedCap.id === "Cap2"
                      ? " top-[-5%] -right-0.5 scale-110 "
                      : " top-[-4.6%] -right-1.5 scale-110 "
                    : allBottles.id === "Liquatic"
                    ? selectedCap.id === "Cap1"
                      ? " top-[2.5%] -right-0.5 scale-110 "
                      : selectedCap.id === "Cap2"
                      ? " top-[.5%]  scale-110 "
                      : " top-[2.2%] -right-0.5 scale-110 "
                    : allBottles.id === "Kiddo"
                    ? selectedCap.id === "Cap1"
                      ? " top-[8%] -right-0.5 scale-110 "
                      : selectedCap.id === "Cap2"
                      ? " top-[7%] -right-0.5 scale-110 "
                      : " top-[8%] -right-1 scale-110 "
                    : " top-[-7%] left-0.5"
                }  absolute  `}
              />
  )
}

export default BottleViewPageImg