import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { userActions } from '../../Store/userSlice'
import { useDispatch } from 'react-redux'


function LoginUser() {
    const [errorMsg, setErrorMessage] = useState('')
    const navigate = useNavigate()
    const dispatch =  useDispatch()
  
      const handleFormSubmittion = async (event) =>{
          
         
          event.preventDefault()
          const fd = new FormData(event.target)
      const acqChannel = fd.getAll('acquisition')
    const data =  Object.fromEntries(fd.entries())
    data.acquisition = acqChannel;
  
   const userData = {
      email : data.email,
     
      password: data.password,
  
    }
    try {
     
    const response = await fetch('http://localhost:8000/api/v1/users/login',{
      method:"POST",
      headers:{
          'Content-Type':'application/json'
      },
      body: JSON.stringify(userData)
    })
  
  
    if(response.ok){
      const res_data = await response.json()
      const userData = res_data.data
      console.log(userData)
      let avatar ;
      if(userData.gender === "Male"){
        avatar = "https://imgs.search.brave.com/x2nmFnzsFJe1ZwxbKrQuH-AqD4DjTTAkB_TMXdV0Ytg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMtZ2xvYmFsLndl/YnNpdGUtZmlsZXMu/Y29tLzYzNmI5Njhh/YzM4ZGQxNDk1ZWM0/ZWRjZC82M2M5N2Ji/YmRlZWNkNjg0OTQ5/NThiNWRfbWFuZ2Et/Y2hhcmFjdGVyX0FJ/JTIwQXZhdGFyJTIw/RHl2by53ZWJw"
      }else{
        avatar = 'https://imgs.search.brave.com/LbRkMxCR8e5-YGmT_QKoFdQQacf4jDiiSg1FWtu0aHs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9mcmVl/YWlhdmF0YXJnZW5l/cmF0b3IucHJvL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIzLzAz/L2FpLWdlbmVyYXRl/ZC1nY2UzNTM0MDE2/XzE5MjAtMTAyNHgx/MDI0LmpwZw'
      }

      dispatch(userActions.updateUser({
        fullName:userData.fullName,
        email:userData.email,
        gender:userData.gender,
        avatar:avatar

      }));
     
      
      
      
      navigate('/')
      
    } else{
      const errorMessage = await response.json()
      setErrorMessage(errorMessage.msg)
      
  
    }
      
    } catch (error) {
      console.log(error)
      
    }
  
  }
  
  return (
    <div className='mt-40'>

    <section className="">
<div className="flex flex-row-reverse text-zinc-800 bg-white mx-20 rounded-xl px-4 py-8 items-center justify-around ">
   
   <div className=" w-[450px]  rounded-lg shadow-zinc-600 shadow-lg  md:mt-0 sm:max-w-md xl:p-0 ">
       <div className=" space-y-4 p-4">
           <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
               Log in to your account
           </h1>
        {
         errorMsg? <p className='text-red-400'>{errorMsg}</p>: <></>
        }
           <form className="space-y-4 " onSubmit={handleFormSubmittion}>
           
               <div>
                   <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                   <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
               </div>
               <div>
                   <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                   <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
               </div>
               
                     
               
               <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Login in</button>
               <p className="text-sm font-light text-gray-600 ">
                   New User? <a href="/register" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Register here</a>
               </p>
           </form>
       </div>
   </div>
   <div>
     <img className='rounded-xl shadow-white shadow-2xl h-[400px]' src="https://imgs.search.brave.com/BoDD5IAU8LX1Q5gwVBvq1fI3dwqKUG9_hV7xro3IcjM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9maWxl/cy5jZG4ucHJpbnRm/dWwuY29tL28vdXBs/b2FkL2xwZy1pbWFn/ZS11cGxvYWQvZDkv/ZDkzZGMwMmZkMzdj/ZDkwZmNlNGQxNmJh/M2Y4MmFiZDU.jpeg" alt='product'/>
   </div>
</div>
</section>
</div>
  )
}

export default LoginUser