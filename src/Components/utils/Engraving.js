import React from 'react'

function Engraving({allBottles, engrave, handleEngrave, engraveColor, handleEngraveColor, handleCheckboxChange}) {

    
  return (
    <div
    className={`flex space-x-4 ${
      allBottles.Engrave ? "block" : "hidden"
    }`}
  >
    <h4 className="font-bold sm:text-sm md:text-base font-roboto">
      ENGRAVE
    </h4>
    <div className="flex flex-col">
      <label className="font-semibold text-base" htmlFor="">+30 ruppee</label>
      <input
        value={engrave}
        onChange={handleEngrave}
        className="border-gray-300 px-4 w-48 h-10 rounded-xl border-2"
        id="engrave"
        type="text"
        maxLength={9}
      />
      <div className="text-sm flex flex-col space-y-1 px-1  py-1 mt-1">
        <h3>Select Engraving Color</h3>
        <div className="flex items-center">
          <label className="inline-flex items-center mr-4">
            <input
              type="checkbox"
              value="text-black"
              checked={engraveColor === "text-black"}
              className="form-checkbox h-4 w-4 text-black "
              onChange={handleEngraveColor}
            />
            <span className="ml-2 text-gray-700">Black</span>
          </label>
          <label className="inline-flex items-center mr-4">
            <input
              type="checkbox"
              value="text-gray-400"
              className="form-checkbox h-4 w-4 text-gray-400"
              checked={engraveColor === "text-gray-400"}
              onChange={handleEngraveColor}
            />
            <span className="ml-2 text-gray-700">Silver</span>
          </label>
          <label className="inline-flex items-center mr-4">
            <input
              type="checkbox"
              value="text-[#d4af37]"
              className="form-checkbox h-4 w-4 text-[#d4af37] bg-[#d4af37]"
              onChange={handleEngraveColor}
              checked={engraveColor === "text-[#d4af37]"}
            />
            <span className="ml-2 text-gray-700">Gold</span>
          </label>
        </div>
      </div>
      <p className="text-sm ml-4">9 Character Limit</p>
      { engrave.length > 0 && (
        <div className="flex items-center space-x-2 pt-2 ">
    
        <input onChange={handleCheckboxChange}  type="checkbox" id="confirmation-checkbox" className="w-5 h-5 form-checkbox text-indigo-600"/>
   
    <h1 className="text-base font-bold ">Confirm Engraving</h1>

    

</div>
      )}
    </div>
   
  </div>
  )
}

export default Engraving