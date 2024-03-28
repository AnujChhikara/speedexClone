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
      <div className="font-bold text-xl mb-2">{user.fullName}</div>
      <p className="text-gray-700 text-base mb-2">Email:- {user.email}</p>
      <p className="text-gray-700 text-base mb-2">Gender: {user.gender}</p>
    </div>
  </div></div>
  )
}

export default Profile