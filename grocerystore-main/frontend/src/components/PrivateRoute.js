import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const adminLogin = useSelector((state) => state.adminLogin);
    const { adminInfo } = adminLogin;

    return (
        <Route
            {...rest}
            render={(props) =>
                adminInfo ? (
                    <Component {...props} />
                ) : (
                    <Redirect to='/admin/login' />
                )
            }
        />
    );
};

export default PrivateRoute;
