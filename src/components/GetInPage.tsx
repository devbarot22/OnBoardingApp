import { useState } from "react"
import { IoMdCheckmark } from "react-icons/io";
  import { Link, useNavigate } from "react-router-dom";
  import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const GetInPage = () => {

  const [isChecked, setIsChecked] = useState(false);


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const navigate = useNavigate();

  const validateForm = (event:any) => {
    event.preventDefault();

    setNameError(name ? "" : "Full Name is required");
    setEmailError(email ? "" : "Email Address is required");
    setPasswordError(password ? "" : "Password is required");
    setConfirmPasswordError(confirmPassword ? "" : "Confirm Password is required");

    if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match");
    }

    if (name && email && password && confirmPassword && password === confirmPassword) {
      if(!isChecked){
        toast.error('please go through Term and Condition and proceed.')
      }
      else{
        navigate("/QandA"); 
      }
    }
  }

  return (
    <>
    <ToastContainer />
    <form onSubmit={validateForm} className='w-screen h-screen'>
      <h1 style={{ fontFamily: "fantasy" }} className='text-center text-lg py-2 font-semibold'>teach:able</h1>
      <hr className='w-screen ' />
      <div className="">
        <h1 className="text-center mt-10 text-3xl mb-10">Get started with Teachable</h1>
        <p className="text-center mb-10">Join more than 100,000 creators who've sold over <span className="font-bold">&#36;1 Billion</span> in courses and coaching.</p>
      </div>
      <div className="flex flex-col items-center w-screen">
        <div className="flex flex-col">
          <label htmlFor="name" className="text-gray-600 mb-1 mt-3 text-sm">Full Name</label>
          <input type="text" className="border-2 w-72 rounded-md p-[6px] outline-none text-base" placeholder="John Doe"  onChange={(e) => {setName(e.target.value); setNameError("");}}/>
          {nameError && <p className="text-red-500">{nameError}</p>}
          <label htmlFor="email" className="text-gray-600 mb-1 mt-6 text-sm">Email Address</label>
          <input type="email" className="border-2 w-72 rounded-md p-[6px] outline-none" placeholder="account@aeonaxy.design" onChange={(e) => {setEmail(e.target.value); setEmailError("");}}/>
          {emailError && <p className="text-red-500">{emailError}</p>}
          <label htmlFor="password" className="text-gray-600 mb-1 mt-6 text-sm">Password</label>
          <input type="password" className="border-2 w-72 rounded-md p-[6px] outline-none" placeholder="Create Password" onChange={(e) => {setPassword(e.target.value); setPasswordError("");}}/>
          {passwordError && <p className="text-red-500">{passwordError}</p>}
          <label htmlFor="confirmPassword" className="text-gray-600 mb-1 mt-6 text-sm">Confirm Password</label>
          <input type="password" className="border-2 w-72 rounded-md p-[6px] outline-none" placeholder="Confirm Password" onChange={(e) => {setConfirmPassword(e.target.value); setConfirmPasswordError("");}}/>
          {confirmPasswordError  && <p className="text-red-500">{confirmPasswordError}</p>}
        </div>
        <div className="flex items-center mt-4">
          <label className="border w-[18px] h-[18px] p-0 rounded-[4px] flex justify-center items-center">
            <input type="checkbox" name="check" className="opacity-0 absolute cursor-pointer" checked={isChecked}
              onChange={() => setIsChecked(!isChecked)} />
            {isChecked && <IoMdCheckmark  size={15}/>}
          </label>
          <h3 className="ml-2 text-[13px] text-gray-700">I agree to the <a href="#" className="underline text-black">Terms of Use</a> and <a href="#" className="underline text-black">Privacy Policy</a></h3>
        </div>
        <div className="flex flex-col items-center">
          <button type="submit" className=" font-sans py-2 px-8 rounded-md mt-8 bg-black text-white text-sm">Create Account</button>
          <h3 className="mt-5">Already have an account? <Link to ='#' className="underline" >Log In</Link></h3>
        </div>
      </div>
    </form>
    </>
  )
}

export default GetInPage