import React from 'react';
import {Routes, Route} from 'react-router-dom';
import LoginPage from '../components/LoginPage';
import Todo from '../components/Todo';
import PrivateRoute from './PrivateRoute';


const AppRouter = () => (
   <Routes>
      <Route path="/" exact element={<LoginPage />} />
      <Route exact path="/todolist" element={<PrivateRoute component={Todo} />} />
   </Routes>

)

export default AppRouter;