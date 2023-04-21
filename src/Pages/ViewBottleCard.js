function ViewBottleCard() {
  return (
    <div>
      <div className="flex justify-evenly items-center">
        <h2>Simplex Dark Blue</h2>
        <img
          src="https://speedexind.com/wp-content/uploads/2023/03/drip-trip_0002_Layer-3.png"
          alt=""
        />
        <div>
          <div>
            <h4>Color</h4>
            <img
              src="https://speedexind.com/wp-content/uploads/2023/01/black-s.png"
              alt=""
            />
            <img
              src="https://speedexind.com/wp-content/uploads/2023/01/blue-s.png"
              alt=""
            />
            <img
              src="https://speedexind.com/wp-content/uploads/2023/02/grey-simplex-icon.png"
              alt=""
            />
            <img
              src="https://speedexind.com/wp-content/uploads/2023/02/matt.png"
              alt=""
            />
          </div>
          <div>
            <h4>Cap</h4>
            <div></div>
          </div>
          <div>
            <h4>Size</h4>
            <div>
              <div>750ml</div>
              <div>1000ml</div>
            </div>
          </div>
        </div>
        <div>
          <h4>ENGRAVE</h4>
          <label htmlFor="">RS. 30</label>
          <input id="engrave" type="text" maxLength={8} />
          <p>8 Character Limit</p>
        </div>
        <div>
          <h4>Price</h4>
          <h5>₹287.00/- per item</h5>
          <div>
            <div>
              <button>-</button>
              <div>1</div>
              <button>+</button>
            </div>
            <button className="bg-[#28303d]">Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ViewBottleCard;
