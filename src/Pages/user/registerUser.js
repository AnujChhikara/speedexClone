
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
    <div className='mt-40'>

       <section className="">
  <div className="flex flex-row-reverse  bg-zinc-800 mx-20 rounded-xl px-4 py-8 items-center justify-around ">
      
      <div className=" w-[450px]  rounded-lg shadow-zinc-600 shadow-lg  md:mt-0 sm:max-w-md xl:p-0 ">
          <div className=" space-y-4 p-4">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Create an account
              </h1>
           {
            errorMsg? <p className='text-red-400'>{errorMsg}</p>: <></>
           }
              <form className="space-y-4 " onSubmit={handleFormSubmittion}>
              <div>
                      <label htmlFor="fullName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full Name</label>
                      <input type="text" name="fullName" id="fullName" placeholder="xyz" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
                  </div>
                  <div>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  
                        <select id="gender"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option value="Male" >Choose your Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        
                        </select>
                 
                  
                  <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Already have an account? <a href="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
                  </p>
              </form>
          </div>
      </div>
      <div>
        <img className='rounded-xl shadow-white shadow-2xl h-[480px]' src="https://imgs.search.brave.com/7VMURaXdr7NRDbNV5cG7ihrVFqG5NSQXjHttIi_Lbw8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jbXMu/Y2xvdWRpbmFyeS52/cHN2Yy5jb20vaW1h/Z2VzL2Nfc2NhbGUs/ZHByX2F1dG8sZl9h/dXRvLGZsX3Byb2dy/ZXNzaXZlLHdfNDUw/L2xlZ2FjeV9kYW0v/ZW4tdXMvUzAwMTcx/NDI5MS9NWFAyNjUx/Mi1GZWItUHJvZHVj/dC1TcG90bGlnaHQt/UFBBRy1UaWxlLURy/aW5rd2FyZS0wMDE.jpeg" alt='product'/>
      </div>
  </div>
</section>
</div>
   
  )
}

export default RegisterUser