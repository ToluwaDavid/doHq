import React from 'react'
// import {FaSignInAlt} from 'react-icons/fa'

const Signin = () => {
    return (
        <div className='bg-gray-700 h-screen w-full'>
            <div className='flex bg-gray-300 justify-center items-center h-full'>
                <form className='mx-auto bg-gray-100 p-8 shadow-lg rounded-lg'>
                    <div>
                        <h2 className='text-3xl text-center font-bold py-6'>SIGN IN </h2>
                        <div className='flex flex-col mb-4'>
                            {/* <label>Username</label> */}
                            <input className='p-3 rounded' type="Email" name="username" placeholder='Email' required></input>
                        </div>
                        <div className='flex flex-col mb-4'>
                            {/* <label>Password</label> */}
                            <input className='p-3 rounded' type="password" name="password" placeholder='Password' required></input>
                        </div>
                            <button className='w-full py-3 font-bold bg-gray-300 rounded '>Sign In</button> 
                    </div>
                    <p className='text-center mt-6'>Forgot Password ?</p>
                    <p className='text-center'>Not a member? Sign Up now</p>
                </form>
            </div>
        </div>
    )
}

export default Signin