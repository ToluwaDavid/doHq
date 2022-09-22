import React from 'react'
// import {FaSignInAlt} from 'react-icons/fa'
// import { AiOutlineUserAdd } from 'react-icons/ai'

const Reg = () => {
    return (
        <div className='w-full h-screen flex bg-slate-400 '>
            <div className='grid grid-cols-1 md:grid-cols-2 m-auto h-[550px] sm:max-[900px] bg-white rounded-lg'>
                <div className='hidden md:block h-[550px] w-full rounded-lg'>
                    <h2 className='mt-[15rem] text-3xl text-center font-white font-bold '>LOGO</h2>
                </div>
                <div className='  bg-gray-100 p-6 rounded-lg'>
                    <h2 className='text-3xl text-center font-bold py-6'>SIGN UP</h2>
                    <form className='mx-auto rounded-lg'>
                        <div>
                            <div className='flex flex-col mb-4'>
                                {/* <label>Password</label> */}
                                <input className='p-3 rounded' type="text" name="password" placeholder='Firstname' required></input>
                            </div>
                            <div className='flex flex-col mb-4'>
                                {/* <label>Password</label> */}
                                <input className='p-3 rounded' type="text" name="password" placeholder='Lastname' required></input>
                            </div>
                            <div className='flex flex-col mb-4'>
                                {/* <label>Username</label> */}
                                <input className='p-3 rounded' type="Email" name="username" placeholder='Email' required></input>
                            </div>
                            <div className='flex flex-col mb-4'>
                                {/* <label>Password</label> */}
                                <input className='p-3 rounded' type="password" name="password" placeholder='Password' required></input>
                            </div>
                            <div className='flex flex-col mb-4'>
                                {/* <label>Password</label> */}
                                <input className='p-3 rounded' type="password" name="confrimpassword" placeholder='Confirm Password' required></input>
                            </div>
                            <button className='w-full py-3 font-bold bg-gray-300 rounded '>Sign Up</button>
                        </div>
                        <p className='text-center mt-5'>Already have an account? Sign In</p>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default Reg