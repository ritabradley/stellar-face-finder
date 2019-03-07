import React from 'react';
import './Signin.css';

const Signin = ({ onRouteChange }) => {
  return (
    <div className='d-flex justify-content-center align-items-center'>
      <div
        className='py-4 text-center card bg-transparent shadow text-light'
        style={{ width: '18rem' }}>
        <div>
          <legend className='display-4 mb-4'>Sign In</legend>
          <div className='form-group mx-4'>
            <label htmlFor='exampleInputEmail1'>Email address</label>
            <input
              type='email'
              className='form-control'
              id='exampleInputEmail1'
              aria-describedby='emailHelp'
              placeholder='Enter email'
            />
          </div>
          <div className='form-group mx-4'>
            <label htmlFor='exampleInputPassword1'>Password</label>
            <input
              type='password'
              className='form-control'
              id='exampleInputPassword1'
              placeholder='Password'
            />
          </div>
          <div>
            <button
              onClick={() => onRouteChange('home')}
              type='submit'
              className='btn custom-button'>
              Sign in
            </button>
          </div>
          <div>
            <button
              onClick={() => onRouteChange('register')}
              type='button'
              className='btn btn-link orange'>
              register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
