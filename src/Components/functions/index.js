import BottleCard from "../utils/BottleCard";
import AllBottleData from "../../Data/AllBottlesData";
import { Link } from "react-router-dom";

export const getBottle = (id) => {
    const bottleData = AllBottleData.find((obj) => obj.id === id).data;
   const bottles = bottleData.map((item) => (
  
  
      
        <BottleCard
          imgUrl={item.imgUrl}
          key={item.id}
          id={item.id}
          bottleName={id}
          name={item.name}
          cutPrice={item.cutPrice}
          price={item.price}
        />
        
      )  );
    
      return bottles
  }

export const getAtelierCategory = (theme,Colors,bottleName) => {
    const wantedtheme = Colors.find((obj) => obj.theme === theme);
    const themeLinks = wantedtheme.data.map((color, index) => (
      
        <Link key={index} to={`/product/Atelier/${bottleName}/${color.id}`}>
          <img
            className="border border-gray-300 w-6 h-6 rounded-full"
            src={color.imgUrl}
            alt=""
          />{" "}
        </Link>
      ));
 return themeLinks

}
 
