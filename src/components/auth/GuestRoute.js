import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "providers/AuthProvider";

const GuestRoute = ({ children, ...rest }) => {
  const authService = useAuth();

  const { isAuthenticated } = authService;
  const onlyChild = React.Children.only(children);

  return (
    <Route
      {...rest}
      render={(props) =>
        !isAuthenticated() ? (
          React.cloneElement(onlyChild, { ...rest, ...props })
        ) : (
          <Redirect to={{ pathname: "/" }} />
        )
      }
    />
  );
};

export default GuestRoute;
