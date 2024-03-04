import React from 'react'

function AddCartButton({bottlePrice, addCartUi, handleCartData}) {
  return (
    <div className="flex items-center  space-x-4">
    <h5 className="font-semibold text-xl">₹{bottlePrice}</h5>
    <div className="flex space-x-4">
    {
      addCartUi && (
        <button
    
        disabled
        className={`bg-[#000000] rounded-3xl text-white px-4  h-10 animate-pulse}`} 
      >
        Adding to cart...
      </button>

      )
    }
    {
      !addCartUi && (
        <button
        onClick={handleCartData}
        className={`bg-[#000000] rounded-3xl text-white px-4  h-10 `} 
      >
        Add to cart
      </button>
      )
    }
    </div>
  </div>
  )
}

export default AddCartButton