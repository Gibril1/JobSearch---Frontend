import React from 'react'
import { FaUserTie, FaEnvelopeOpen, FaEyeSlash } from 'react-icons/fa'
import LogPic from '../assets/users.png'


const RegisterPage = () => {
  return (
    <>
        
    <main>
        
        <section className="grid container flex">
            <div>
                <img src={LogPic} alt="" />
            </div>
            <form>
                <h1>Join Us Today</h1>
                <div className="form-group">
                    <label htmlFor="username">
                    <FaUserTie/>Username
                    </label>
                    <input 
                        type="text" 
                        name="username" 
                        id="username"
                        className='formControl'
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">
                        <FaEnvelopeOpen/>Email</label>
                    <input 
                        type="email" 
                        name="email" 
                        id="email"
                        className='formControl'
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">
                        <FaEyeSlash/>Password</label>
                    <input 
                        type="password" 
                        name="password" 
                        id="password"
                        className='formControl'
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password2"><FaEyeSlash/>Confirm Password</label>
                    <input 
                        type="password" 
                        name="password2" 
                        id="password2"
                        className='formControl'
                    />
                </div>
                <div className="form-group">
                    <button type="submit" className='btn'>Register</button>
                </div>
            </form>
            
        </section>
    </main>
    </>
    
  )
}

export default RegisterPage