import React, { useContext, useState } from "react";
import { Button, FloatingLabel, Form, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ImEye } from "react-icons/im";
import { RxEyeClosed } from "react-icons/rx";

import { ThemeContext } from "../../context/themeContext";
import { useFormik } from "formik";
import * as Yup from "yup";

import "../../assets/css/Logs/login.css";

const Login = () => {
  const { darkMode } = useContext(ThemeContext);
  const [changeType, setChangeType] = useState("password");

  const handleChangeType = (e) => {
    e.preventDefault();
    setChangeType(changeType == "password" ? "text" : "password");
  };

  const loginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Ingrese un mail valido email")
      .required("El mail es requerido"),
    password: Yup.string()
      .min(8, "Too Short!")
      .max(12, "Too Long!")
      .required("Required"),
  });

  const loginUser = (object) => {
    console.log(object);
  };

  const {
    values,
    errors,
    touched,
    handleSubmit,
    handleChange,
    handleBlur,
    resetForm,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    onSubmit: (values) => {
      loginUser(values);
    },
    validationSchema: loginSchema,
  });

  return (
    <>
      <section className="contenedorLoginForm">
        <Form className={darkMode ? "loginFormDark" : "loginFormLight"}>
          <h1 className="tituloLogin">Login</h1>
          <Form.Group md="4" controlId="validationCustomUsername">
            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="mb-3"
            >
              <Form.Control
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
            </FloatingLabel>

            <InputGroup>
              <FloatingLabel controlId="floatingPassword" label="Password">
                <Form.Control type={changeType} />
              </FloatingLabel>

              <button onClick={handleChangeType} className="botonChangeType">
                {" "}
                {changeType == "text" ? <ImEye /> : <RxEyeClosed />}
              </button>
            </InputGroup>
          </Form.Group>

          <button
            className={
              darkMode ? "my-3 botonLoginDark" : "my-3 botonLoginLight"
            }
          >
            Login
          </button>


          <Link to="/register">
            <button
              className={darkMode ? "my-3 botonRegisterDark" : " my-3 botonRegisterLight"}
            >
              Register
            </button>
          </Link>
        </Form>
      </section>
    </>
  );
};

export default Login;
