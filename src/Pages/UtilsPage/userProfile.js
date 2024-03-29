import React from 'react'
import { useSelector } from 'react-redux'

function Profile() {
    const userData = useSelector((state) => state.user)
   const user = userData.userData[0]
  return (
    <div className="w-screen rounded mt-40 flex justify-center items-center  ">
        <div className='flex flex-col justify-center items-center shadow-lg shadow-gray-500 p-4'>
    <img className="w-40 rounded-lg" src={user.avatar} alt="User Avatar" />
    <div className="px-6 py-4">
      <div className="font-bold flex space-x-2 text-xl mb-2"><h3 className='text-lg font-semibold'>Name:</h3><p>{user.fullName}</p></div>
      <div className="font-bold flex space-x-2 text-xl mb-2"><h3 className='text-lg font-semibold'>Email:</h3><p>{user.email}</p></div>
      <div className="font-bold flex space-x-2 text-xl mb-2"><h3 className='text-lg font-semibold'>Gender:</h3><p>{user.gender}</p></div>
    </div>
  </div></div>
  )
}

export default Profile