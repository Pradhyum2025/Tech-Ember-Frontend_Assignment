import axios from 'axios';
import React, { useState } from 'react'

export default function Signup() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: ""
  })

  const [isLoading,setIsLoading] = useState(false);

  const handleOnClick = (e) => {
    const { value, name } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async () => {

    if (!formData.password) {
      alert("Please Enter Password")
      return null;
    }
    if (!formData.email) {
      alert("Please Enter Password")
      return null;
    }

    if (!formData.fullName) {
      alert("Please Enter Full Name")
      return null;
    }

    if(formData.password !==formData.confirmPassword){
      alert("Please Make sure password and confirm password both same")
      return null;
    }
    
    try {
       setIsLoading(()=>true)

       console.log("import.meta.VITE_BACKEND_URL --->",import.meta.VITE_BACKEND_URL)
      const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/signup`,formData)
      console.log("Signin response: ", res)

      console.log("Signin response: ", res?.data)
      if (res.data?.success) {
        alert("User Signup successful!")
      }
    } catch (error) {
      console.log("Erorr while Signup :", error?.message || error)
    }finally{
      setIsLoading(()=>false)
    }

  }
  return (
    <div className='bg-gray-100 max-w-2xl lg:min-w-md p-4 rounded-xl'>
      <h1 className='text-xl font-bold'>Sign Up form</h1>
      <form className='space-y-5  my-10' >

        {/* Full Name */}
        <div className='flex flex-col space-y-3 justify-start'>
          <label
            className='text-start text-gray-800 font-semibold text-sm' htmlFor="fullName">Full Name</label>
          <input
            className='h-8 border-3 rounded-md ring-3 ring-indigo-400 outline-offset-0 ring-offset-0 focus:ring-indigo-600 outline-0 border-gray-200 py-4 px-2 font-semibold text-md'
            name='fullName'
            type="text"
            value={formData.fullName}
            onChange={handleOnClick}
          />
        </div>

        {/* email */}
        <div className='flex flex-col space-y-3 justify-start'>
          <label
            className='text-start text-gray-800 font-semibold text-sm' htmlFor="email">Email</label>
          <input
            className='h-8 border-3 rounded-md ring-3 ring-indigo-400 outline-offset-0 ring-offset-0 focus:ring-indigo-600 outline-0 border-gray-200 py-4 px-2 font-semibold text-md'
            id='email'
            name='email'
            type="email"
            value={formData.email}
            onChange={handleOnClick}
          />
        </div>

        {/* password */}
        <div className='flex flex-col space-y-3 justify-start'>
          <label className='text-start text-gray-800 font-semibold text-sm' htmlFor="password">Password</label>
          <input
            className='h-8 border-3 rounded-md ring-3 ring-indigo-400 outline-offset-0 ring-offset-0 focus:ring-indigo-600 outline-0 border-gray-200 py-4 px-2 font-semibold text-md' name='password' type="password"
            value={formData.password}
            onChange={handleOnClick} />
        </div>

        {/* confirm password */}
        <div className='flex flex-col space-y-3 justify-start'>
          <label className='text-start text-gray-800 font-semibold text-sm' htmlFor="password">Password</label>
          <input
            className='h-8 border-3 rounded-md ring-3 ring-indigo-400 outline-offset-0 ring-offset-0 focus:ring-indigo-600 outline-0 border-gray-200 py-4 px-2 font-semibold text-md' name='confirmPassword' type="password"
            value={formData.confirmPassword}
            onChange={handleOnClick} />
        </div>

        {/* button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
          className='bg-indigo-600 px-4 py-1 rounded-md text-md font-bold text-white transition ease-out duration-150 delay-150 hover:scale-[1.1] cursor-pointer mt-5'>
            {isLoading?"Signing..":"Signup"}
        </button>

      </form>
    </div>
  )
}
