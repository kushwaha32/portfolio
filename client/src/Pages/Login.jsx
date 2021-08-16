import { CircularProgress } from "@material-ui/core";
import { useContext, useEffect, useState } from "react";
import AlertComponent from "../Components/alert";
import Title from "../Components/Title";
import alertContext from "../Context/Alert/alertContext";
import authContext from "../Context/auth/authContext";

const Login = (props) => {
  const [loginField, setLoginField] = useState({
    email: "",
    password: "",
  });

  const getContext = useContext(authContext);
  const useAlertContext = useContext(alertContext);
  const { setAlert } = useAlertContext;
  const { login, isAuthenticated, loading, error } = getContext;

  useEffect(() => {
    getContext.authAndLoading();
    if (isAuthenticated) {
      props.history.push("/");
    }
    // Error handling
    if(error != null && error.length > 0){
       error.map(err => setAlert(err.msg, "error"));
    }
    // eslint-disable-next-line
  }, [isAuthenticated, props.history, error]);

  const onChange = (e) => {
    setLoginField({ ...loginField, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    login(loginField);
  };

  return (
    <div className="Contact padding-comman">
      <Title title="Login Form" opaceTitle="Login Form" />
      <div className="contact-form">
        <div className="form-control">
          <AlertComponent />
          <form onSubmit={onSubmit} style={{marginTop: "2rem"}}>
            <input
              type="email"
              name="email"
              onChange={onChange}
              placeholder="E-mail"
            />
            <input
              type="password"
              name="password"
              onChange={onChange}
              placeholder="password"
            />
            <button type="submit" className="btn btn-contact-form btn-login">
              {loading ? (
                <CircularProgress style={{ width: "25px", height: "25px", color: "white" }} />
              ) : (
                "Login"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
