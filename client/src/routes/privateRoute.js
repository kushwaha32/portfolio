import { useContext, useEffect } from "react";
import { Redirect, Route } from "react-router-dom";
import authContext from "../Context/auth/authContext";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const useAuthContext = useContext(authContext);
  const { authAndLoading } = useAuthContext;
  useEffect(() => {
    if (localStorage.token) {
      authAndLoading();
    }

    //eslint-disable-next-line
  }, []);
  return (
    <Route
      {...rest}
      render={(props) =>
        localStorage.token ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: {
                from: props.location,
              },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
