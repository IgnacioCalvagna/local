import React, { useContext, useState } from "react";
import { FloatingLabel, Form, InputGroup } from "react-bootstrap";
import { ImEye } from "react-icons/im";
import { RxEyeClosed } from "react-icons/rx";
import { FcCheckmark } from "react-icons/fc";

import { useFormik } from "formik";
import * as Yup from "yup";

import { ThemeContext } from "../../context/themeContext";

import '../../assets/css/Logs/register.css'


const Register = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  const [changeType, setChangeType] = useState("password");

  const handleChangeType = (e) => {
    e.preventDefault();
    setChangeType(changeType == "password" ? "text" : "password");
  };

  const newUserSchema = Yup.object().shape({
    nombre: Yup.string()
      .required("* El nombre es requerido")
      .min(3, "El nombre es muy corto!")
      .max(13, "El nombre es muy largo!"),
    apellido: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("El apellido es requerido"),
    username: Yup.string()
      .min(6, "el nombre de usuario es muy corto")
      .max(50, "Too Long!")
      .required("El nombre de usuario es requerido"),
    email: Yup.string()
      .email("Ingrese un mail valido email")
      .required("El mail es requerido"),
    password: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  const createUser = (object) => {
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
      nombre: "",
      apellido: "",
      username: "",
      email: "",
      password: "",
    },

    onSubmit: (values) => {
      createUser(values);
    },
    validationSchema: newUserSchema,
  });

  return (
    <>
      <section className="contenedorRegisterForm">
        <Form
          className={darkMode ? "registerFormDark" : "registerFormLight"}
          onSubmit={handleSubmit}
        >
          <h1 className="tituloRegister">Register</h1>
          <Form.Group md="4" controlId="validationCustomUsername">
            {/* Nombre  */}
            <InputGroup className="mb-3">
              <FloatingLabel controlId="nombre" label="Nombre">
                <Form.Control
                  type="text"
                  name="nombre"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.nombre}
                />
              </FloatingLabel>
              <button disabled className="botonCheckInputs">
                {!values.nombre ? (
                  <sub className="errores"> ...</sub>
                ) : (
                  <>
                    {touched.nombre && errors.nombre ? (
                      <sub className="errores">❌</sub>
                    ) : (
                      <sub>
                        {" "}
                        <FcCheckmark />
                      </sub>
                    )}
                  </>
                )}
              </button>
            </InputGroup>
            {touched.nombre && errors.nombre && (
              <span className="errores ">{errors.nombre}</span>
            )}

            {/* Apellido  */}
            <InputGroup className="mb-3">
              <FloatingLabel controlId="apellido" label="Apellido">
                <Form.Control
                  type="text"
                  name="apellido"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.apellido}
                />
              </FloatingLabel>
              <button disabled className="botonCheckInputs">
                {!values.apellido ? (
                  <sub className="errores"> ...{/*  {errors.nombre} */}</sub>
                ) : (
                  <>
                    {touched.apellido && errors.apellido ? (
                      <sub className="errores">❌{/*  {errors.nombre} */}</sub>
                    ) : (
                      <sub>
                        {" "}
                        <FcCheckmark />
                      </sub>
                    )}
                  </>
                )}
              </button>
            </InputGroup>
            {touched.apellido && errors.apellido && (
              <span className="errores ">{errors.apellido}</span>
            )}

            {/* UserName  */}
            <InputGroup className="mb-3">
              <FloatingLabel controlId="username" label="Username">
                <Form.Control
                  type="text"
                  name="username"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.username}
                />
              </FloatingLabel>
              <button disabled className="botonCheckInputs">
                {!values.username ? (
                  <sub className="errores"> ...{/*  {errors.nombre} */}</sub>
                ) : (
                  <>
                    {touched.username && errors.username ? (
                      <sub className="errores">❌{/*  {errors.nombre} */}</sub>
                    ) : (
                      <sub>
                        {" "}
                        <FcCheckmark />
                      </sub>
                    )}
                  </>
                )}
              </button>
            </InputGroup>
            {touched.username && errors.username && (
              <span className="errores ">{errors.username}</span>
            )}

            {/* Email  */}
            <InputGroup className="mb-3">
              <FloatingLabel controlId="email" label="Email">
                <Form.Control
                  type="text"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
              </FloatingLabel>
              <button disabled className="botonCheckInputs">
                {!values.email ? (
                  <sub className="errores"> ...{/*  {errors.nombre} */}</sub>
                ) : (
                  <>
                    {touched.email && errors.email ? (
                      <sub className="errores">❌{/*  {errors.nombre} */}</sub>
                    ) : (
                      <sub>
                        {" "}
                        <FcCheckmark />
                      </sub>
                    )}
                  </>
                )}
              </button>
            </InputGroup>
            {touched.email && errors.email && (
              <span className="errores ">{errors.email}</span>
            )}

            {/* Email  */}
            <InputGroup>
              <FloatingLabel controlId="password" label="Password">
                <Form.Control
                  type={changeType}
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
              </FloatingLabel>

              <button onClick={handleChangeType} className="botonChangeType">
                {" "}
                {changeType == "text" ? <ImEye /> : <RxEyeClosed />}
              </button>
            </InputGroup>
            {touched.password && errors.password && (
              <span className="errores ">{errors.password}</span>
            )}
          </Form.Group>

          <button
            type="submit"
            className={
              darkMode ? "my-3 botonRegisterDark" : "my-3 botonRegisterLight"
            }
          >
            Sign up
          </button>
        </Form>
      </section>
    </>
  );
};

export default Register;
