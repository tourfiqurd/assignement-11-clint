import React from 'react';
import useAuth from './../../hooks/useAuth';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ children, ...rest }) => {
    const user = useAuth()
    const { isLoading } = useAuth()
    console.log(user);
    if (isLoading) {
        return <div style={{ height: "800px", padding: "50px", display: "flex", justifyContent: "center", width: "100%" }} class="spinner-border text-primary" role="status">
            <span width="50px" class="visually-hidden">Loading...</span>
        </div>
    }
    return (

        <Route
            {...rest}
            render={({ location }) =>
                (user?.user.email) ? children :
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />

            }
        />

    );
};

export default PrivateRoute;