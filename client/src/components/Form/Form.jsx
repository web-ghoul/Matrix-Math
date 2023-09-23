import React from "react";
import "./Form.scss";
import Contact from "./Contact";
import { useFormik } from "formik";
import * as yup from "yup";
import Register from "./Register";
import Login from "./Login";
import ForgotPassword from "./ForgotPassword";
import ResetPassword from "./ResetPassword";
import Verify from "./Verify";

const Form = ({ type }) => {
  //Contact
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
    onSubmit: (values, { resetSubmit }) => {
      console.log(values);
    },
  });

  //Register
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
    onSubmit: (values, { resetSubmit }) => {
      console.log(values);
    },
  });

  //Login
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
    onSubmit: (values, { resetSubmit }) => {
      console.log(values);
    },
  });

  //Forgot Password
  const forgotPasswordValidationSchema = yup.object({
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
  });

  const forgotPasswordInitialValues = {
    email: "",
  };

  const forgotPasswordFormik = useFormik({
    initialValues: forgotPasswordInitialValues,
    validationSchema: forgotPasswordValidationSchema,
    onSubmit: (values, { resetSubmit }) => {
      console.log(values);
    },
  });

  //Reset Password
  const resetPasswordValidationSchema = yup.object({
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

  const resetPasswordInitialValues = {
    password: "",
    confirm_password: "",
  };

  const resetPasswordFormik = useFormik({
    initialValues: resetPasswordInitialValues,
    validationSchema: resetPasswordValidationSchema,
    onSubmit: (values, { resetSubmit }) => {
      console.log(values);
    },
  });

  //Reset Password
  const [otp, setOtp] = React.useState("");
  const handleChange = (newValue) => {
    setOtp(newValue);
  };
  const handleVerifyAccount=()=>{
    console.log(otp)
  }

  return (
    <form
      className={`grid jcs aifs g30 ${
        (type === "login" ||
          type === "forgot_password" ||
          type === "verify_account" ||
          type === "reset_password") &&
        "form_halves"
      }`}
      onSubmit={
        type === "contact"
          ? contactFormik.handleSubmit
          : type === "forgot_password"
          ? forgotPasswordFormik.handleSubmit
          : type === "login"
          ? loginFormik.handleSubmit
          : type === "register"
          ? registerFormik.handleSubmit
          : type === "reset_password"
          ? resetPasswordFormik.handleSubmit
          : type === "verify_account" && handleVerifyAccount
      }
    >
      {type === "contact" ? (
        <Contact formik={contactFormik} />
      ) : type === "register" ? (
        <Register formik={registerFormik} />
      ) : type === "login" ? (
        <Login formik={loginFormik} />
      ) : type === "forgot_password" ? (
        <ForgotPassword formik={forgotPasswordFormik} />
      ) : type === "reset_password" ? (
        <ResetPassword formik={resetPasswordFormik} />
      ) : (
        type === "verify_account" && (
          <Verify otp={otp} handleChange={handleChange} />
        )
      )}
    </form>
  );
};

export default Form;
