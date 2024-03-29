
import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'



function RegisterUser() {
  const [errorMsg, setErrorMessage] = useState('')
  const navigate = useNavigate()
 

    const handleFormSubmittion = async (event) =>{
        const selectElement = document.getElementById('gender');
        const gender = selectElement.value;
       
        event.preventDefault()
        const fd = new FormData(event.target)
    const acqChannel = fd.getAll('acquisition')
  const data =  Object.fromEntries(fd.entries())
  data.acquisition = acqChannel;

 const userData = {
    email : data.email,
    fullName: data.fullName,
    password: data.password,
    gender

  }
  try {
   
  const response = await fetch('http://localhost:8000/api/v1/users/register',{
    method:"POST",
    headers:{
        'Content-Type':'application/json'
    },
    body: JSON.stringify(userData)
  })


  if(response.ok){
    
    const res_data = await response.json()
    console.log(res_data)
    navigate('/login')
    
  } else{
    const errorMessage = await response.json()
    setErrorMessage(errorMessage.msg)
    

  }
    
  } catch (error) {
    console.log(error)
    
  }

}


  return (
    <div className='mt-40 w-screen h-[500px]'>

       <section className="flex justify-center">
  <div className="flex flex-row-reverse w-2/3 bg-zinc-800 rounded-xl px-4 py-8 items-center justify-around ">
      
      <div className=" rounded-lg border   md:mt-0 sm:max-w-md xl:p-0 ">
          <div className=" space-y-4 p-4">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Create an account
              </h1>
           {
            errorMsg? <p className='text-red-400'>{errorMsg}</p>: <></>
           }
              <form className="space-y-4 " onSubmit={handleFormSubmittion}>
                <div className='flex space-x-4'>
              <div>
                      <label htmlFor="fullName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full Name</label>
                      <input type="text" name="fullName" id="fullName" placeholder="xyz" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
                  </div></div>
                  <div className='flex space-x-4 items-end'>
                  <div>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  
                        <select id="gender"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-10  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option value="Male" >Choose your Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        
                        </select>
                 
                        </div>
                        <div>
                       
                        </div>
                  <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Already have an account? <a href="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
                  </p>
              </form>
          </div>
      </div>
      <div>
        <img className='rounded-xl  h-[300px]'
         src="https://imgs.search.brave.com/ugl3sPdhDb1U9TYOhFOv79Dp2Jxr_SyuH42mEj_7hyA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/dHJhdmVsYW5kbGVp/c3VyZS5jb20vdGht/Yi9nWlZySDhLSGRB/YVF5Wk55Yk5YckFB/VlZkeEU9LzE1MDB4/MC9maWx0ZXJzOm5v/X3Vwc2NhbGUoKTpt/YXhfYnl0ZXMoMTUw/MDAwKTpzdHJpcF9p/Y2MoKS9UQUwtUEVP/LVRTVi1UaGVybW9m/bGFzay1Eb3VibGUt/U3RhaW5sZXNzLVN0/ZWVsLUluc3VsYXRl/ZC1XYXRlci1Cb3R0/bGUtd2l0aC1Ud28t/TGlkcy1Db25vclJh/bHBoLTAxLTIxMTcx/YTRkOThhNDQ4ZTc5/MDliMzg1NjAzMmIx/NWI0LmpwZw"
          alt='product'/>
      </div>
  </div>
</section>
</div>
   
  )
}

export default RegisterUser