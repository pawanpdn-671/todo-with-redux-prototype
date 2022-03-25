import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginTodo } from '../redux/Action';

const LoginPage = () => {
   const dispatch = useDispatch();

   return (
      <div className='login-container'>
         <h2>Login</h2>

         <form className='login-form'>
            <div className='field-group'>
               <label htmlFor="username">Username</label>
               <input type="text" id="username" />
            </div>

            <div className='field-group'>
               <label htmlFor="username">Password</label>
               <input type="password" id="password" />
            </div>

            <Link to="/todolist" className='login-btn' type="button" onClick={() => dispatch(loginTodo(true))}>Login</Link>
         </form>
      </div>
   )
}

export default LoginPage;