import { getAtelierCategory } from "../functions"

function AtelierCategory({Colors, bottleName}) {

    const floralLink = getAtelierCategory("Floral and Fauna", Colors, bottleName)
    const sportyLink = getAtelierCategory("Sporty", Colors, bottleName)
    const bestBuddiesLink = getAtelierCategory("Best Buddies", Colors, bottleName)
    const justKiddingLink = getAtelierCategory("Just Kidding", Colors, bottleName)
    const teenLink= getAtelierCategory("Teen", Colors, bottleName)
    const nirvanaLink = getAtelierCategory("Nirvana", Colors, bottleName)
    const limitedEditionLink = getAtelierCategory("Limited Edition", Colors, bottleName)
    const  magicalArtLink= getAtelierCategory("Magical Art", Colors, bottleName)

  return (
    <div className="flex flex-col  items-start space-y-4">
                {/* floral */}
                <div className="flex space-x-4 items-center">
                  <h3 className="text-sm hover:underline duration-1000 w-28 text-gray-500 font-mon">
                    Floral and Fauna
                  </h3>
                  <div className="flex space-x-2 ">{floralLink}</div>
                </div>
                {/* sporty */}
                <div className="flex space-x-4 justify-start items-center">
                  <h3 className="text-sm w-28 text-gray-500 font-mon">
                    Sporty
                  </h3>
                  <div className="flex space-x-2 ">{sportyLink}</div>
                </div>
                {/* bestBuddies */}
                <div className="flex space-x-4 justify-start items-center">
                  <h3 className="text-sm w-28 text-gray-500 font-mon">
                    Best Buddies
                  </h3>
                  <div className="flex space-x-2 ">{bestBuddiesLink}</div>
                </div>
                {/* just Kidding */}
                <div className="flex space-x-4 justify-start items-center">
                  <h3 className="text-sm w-28 text-gray-500 font-mon">
                    Just Kidding
                  </h3>
                  <div className="flex space-x-2 ">{justKiddingLink}</div>
                </div>
                {/* magical Art */}
                <div className="flex space-x-4 justify-start items-center">
                  <h3 className="text-sm w-28 text-gray-500 font-mon">
                    Magical Art
                  </h3>
                  <div className="flex space-x-2 ">{magicalArtLink}</div>
                </div>
                {/* nirvana */}
                <div className="flex space-x-4 justify-start items-center">
                  <h3 className="text-sm w-28 text-gray-500 font-mon">
                    Nirvana
                  </h3>
                  <div className="flex space-x-2 ">{nirvanaLink}</div>
                </div>
                {/* teen */}
                <div className="flex space-x-4 justify-start items-center">
                  <h3 className="text-sm w-28 text-gray-500 font-mon">Teen</h3>
                  <div className="flex space-x-2 ">{teenLink}</div>
                </div>
                {/* limitedEdition */}
                <div className="flex space-x-4 justify-start items-center">
                  <h3 className="text-sm w-28 text-gray-500 font-mon">
                    Limited Edition
                  </h3>
                  <div className="flex space-x-2 ">{limitedEditionLink}</div>
                </div>
              </div>
  )
}

export default AtelierCategory