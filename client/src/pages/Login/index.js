import React, { useState, useEffect  } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { clearMessage } from "../../redux/reducers/slices/message";
import { login } from "../../redux/reducers/slices/auth";
import { Redirect } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useStyles } from "./styles.js";
import { Link } from "react-router-dom";
import "./login.css"
const Login = (props) => {

    
    const [loading, setLoading] = useState(false);
    const { isLoggedIn } = useSelector((state) => state.auth);
    const { message } = useSelector((state) => state.message);

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(clearMessage());
    }, [dispatch]);
  
    const initialValues = {
      username: "",
      password: "",
    };

    const validationSchema = Yup.object().shape({
        username: Yup.string().required("This field is required!"),
        password: Yup.string().required("This field is required!"),
      });

    const handleLogin = (formValue) => {
      const { username, password } = formValue;
      setLoading(true);
  
      dispatch(login({ username, password }))
        .unwrap()
        .then(() => {
          props.history.push("/");
          window.location.reload();
        })
        .catch(() => {
          setLoading(false);
        });
    };

      if (isLoggedIn) {
        return <Redirect to="/" />;
      }

    
      return (
        <div className="col-md-12 login-form">
        <div className="card card-container">
            <img className="profile-img-card"
              src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
              alt="profile-img"

            />
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleLogin}
            >
              <Form>
                <div className="form-group">
                  <label htmlFor="username" >Username</label>
                  <Field name="username" type="text" className="form-control" />
                  <ErrorMessage
                    name="username"
                    component="div"
                    className="alert alert-danger"
                  />
                </div>
    
                <div className="form-group">
                  <label htmlFor="password" >Password</label>
                  <Field name="password" type="password" className="form-control" />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="alert alert-danger"
                  />
                </div>
    
                <div className="d-grid gap-2  py-3">
                <button type="submit" className="btn btn-primary btn-block" disabled={loading}>
                  {loading && (
                    <span className="spinner-border "></span>
                  )}
                  <span>Login</span>
                </button>
                    <Link to="/register" className="btn btn-link btn-block ">Register</Link>
                </div>
              </Form>
            </Formik>
          </div>
    
          {message && (
            <div className="form-group">
              <div className="alert alert-danger" role="alert">
                {message}
              </div>
            </div>
          )}
        </div>
      );

};

export default Login;