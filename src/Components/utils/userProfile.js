
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function UserProfile({userData}) {
    const [isClicked, setIsClicked] = useState(false)

    const handleClick = () => {
        setIsClicked( !isClicked)
    }
    
    
  return (
    <div>
        {
                userData.userData.length>0 &&<>  <div className="flex justify-center items-center space-x-2">
                  <img className="w-8 rounded-full" src={userData.userData[0].avatar} alt="avatar"/>
                  <h4>{userData.userData[0].fullName}</h4>
                  <button onClick={handleClick}>
                  <svg fill="#000000" className={`w-4 duration-700 ${isClicked ? 'rotate-180' : '' }`}  viewBox="-6.5 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <title>dropdown</title>
                        <path d="M18.813 11.406l-7.906 9.906c-0.75 0.906-1.906 0.906-2.625 0l-7.906-9.906c-0.75-0.938-0.375-1.656 0.781-1.656h16.875c1.188 0 1.531 0.719 0.781 1.656z"></path>
                        </svg>
                        
                       </button>
                       
                </div>

                    {
                        isClicked && <div className='mt-4 px-4 py-3 absolute bg-white'>
                            <ul className='flex flex-col space-y-4 justify-center items-center' onClick={handleClick}>
                            <Link to='/profile'> <li>Your Profile</li></Link>
                            <Link to='/profile'>  <li>WishList</li></Link>
                                <li className='bg-red-700 px-2 rounded-xl py-1 text-white'>Logout</li>
                            </ul>
                        </div> 
                    }</>
                
              }{
                !userData.userData.length>0 && <Link to="/register">
                <div className="flex justify-center space-x-2 items-center text-sm ">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.4" d="M12.1207 12.78C12.0507 12.77 11.9607 12.77 11.8807 12.78C10.1207 12.72 8.7207 11.28 8.7207 9.50998C8.7207 7.69998 10.1807 6.22998 12.0007 6.22998C13.8107 6.22998 15.2807 7.69998 15.2807 9.50998C15.2707 11.28 13.8807 12.72 12.1207 12.78Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" strokeLinejoin="round"/>
                    <path opacity="0.34" d="M18.7398 19.3801C16.9598 21.0101 14.5998 22.0001 11.9998 22.0001C9.39977 22.0001 7.03977 21.0101 5.25977 19.3801C5.35977 18.4401 5.95977 17.5201 7.02977 16.8001C9.76977 14.9801 14.2498 14.9801 16.9698 16.8001C18.0398 17.5201 18.6398 18.4401 18.7398 19.3801Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" strokeLinejoin="round"/>
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" strokeLinejoin="round"/>
                    </svg>
                    <p>Profile</p></div></Link>
              }
    </div>
  )
}

export default UserProfile