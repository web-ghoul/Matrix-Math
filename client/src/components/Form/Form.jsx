import React from "react";
import "./Form.scss";
import Contact from "./Contact";
import { useFormik } from "formik";
import * as yup from "yup";
import Register from "./Register";
import Login from "./Login";

const Form = ({ type }) => {
  const contactValidationSchema = yup.object({
    name: yup.string("Enter your name").required("name is required"),
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
    message: yup.string("Enter your message").required("message is required"),
  });
  const contactInitialValues = {
    name: "",
    email: "",
    message: "",
  };
  const contactFormik = useFormik({
    initialValues: contactInitialValues,
    validationSchema: contactValidationSchema,
    onSubmit: (values, { resetSubmit }) => {},
  });

  const registerValidationSchema = yup.object({
    name: yup.string("Enter your name").required("name is required"),
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
    phone: yup
      .string("Enter your phone number")
      .required("Phone Number is required"),
    gender: yup
      .string("Enter your phone gender")
      .required("gender is required"),
    password: yup
      .string("Enter your password")
      .required("Password is required")
      .min(8, "Password should be of minimum 8 characters length"),
    confirm_password: yup
      .string()
      .required()
      .min(8)
      .when("password", (password, field) =>
        password
          ? field
              .required("Password isn't Matched")
              .oneOf([yup.ref("password")])
          : field
      ),
  });
  const registerInitialValues = {
    name: "",
    email: "",
    phone: "",
    gender: "",
    password: "",
    confirm_password: "",
  };
  const registerFormik = useFormik({
    initialValues: registerInitialValues,
    validationSchema: registerValidationSchema,
    onSubmit: (values, { resetSubmit }) => {},
  });

  const loginValidationSchema = yup.object({
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),

    password: yup
      .string("Enter your password")
      .required("Password is required")
      .min(8, "Password should be of minimum 8 characters length"),
  });
  const loginInitialValues = {
    email: "",
    password: "",
  };
  const loginFormik = useFormik({
    initialValues: loginInitialValues,
    validationSchema: loginValidationSchema,
    onSubmit: (values, { resetSubmit }) => {},
  });
  return (
    <form
      className={`grid jcs aifs g30 ${type === "login" && "form_halves"}`}
      onSubmit={type === "contact" && contactFormik.handleSubmit}
    >
      {type === "contact" ? (
        <Contact formik={contactFormik} />
      ) : type === "register" ? (
        <Register formik={registerFormik} />
      ) : (
        type === "login" && <Login formik={loginFormik} />
      )}
    </form>
  );
};

export default Form;
