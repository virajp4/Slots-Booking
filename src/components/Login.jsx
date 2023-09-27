import { useState } from 'react'

import './styles/loginstyles.css'

export default function Login() {
  return (
    <>
      <div className="main-box">
        <div className="main">
          <div className="login-box">
            <div className="login">
              <h1 className='login-head'>Log in</h1>
              <form className='login-form'>
                <div className="form-group">
                  <div className='form-boxes mb-1'>
                    <label className='labels mb-1' htmlFor="reg">Register Number</label>
                    <input className='inputs' type="reg" id="reg" />
                  </div>
                  <button className='btn btn-warning mt-3' type="submit">Log in</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      
    </>
  )
}
