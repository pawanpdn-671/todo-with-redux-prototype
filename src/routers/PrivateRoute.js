import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({isAuthenticated, component: Component}) => {

   return (
      <React.Fragment>
         {
            isAuthenticated ? <Component /> : <Navigate to="/" />
         }
      </React.Fragment>
   )
}

const mapStateToProps = (state) => {
   return {
      isAuthenticated: state.login.login
   }
}

export default connect(mapStateToProps)(PrivateRoute);