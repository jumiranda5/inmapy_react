import * as Yup from 'yup';
import { nav_locale } from './nav_location';
import { authErrors } from './auth_errors';
const locale = nav_locale();

let lang;
if (locale === "pt") lang = "pt";
else lang = "en";

const errMessages = authErrors(lang);

export const signupSchema =  Yup.object().shape({
  username: Yup.string()
    .matches(/^[a-zA-Z0-9._-]{1,100}$/, errMessages.username_invalid)
    .min(3, errMessages.username_short)
    .max(30, errMessages.username_long)
    .required(errMessages.username_required),
  email: Yup.string()
    .email(errMessages.email_invalid)
    .required(errMessages.email_required),
  password: Yup.string()
    .min(8, errMessages.password_length)
    .required(errMessages.password_required)
});

export const loginSchema = Yup.object().shape({
  user: Yup.string().required(errMessages.user_error),
  password: Yup.string().required(errMessages.pwd_error)
});

export const forgotPwdSchema = Yup.object().shape({
  email: Yup.string()
    .email(errMessages.email_invalid)
    .required(errMessages.email_required)
});

export const resetPwdSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, errMessages.password_length)
    .required(errMessages.password_required),
  confirm_password: Yup.string()
    .oneOf([Yup.ref('password'), null], errMessages.passwords_must_match)
});

export const changePwdSchema = Yup.object().shape({
  new_password: Yup.string()
    .min(8, errMessages.password_length)
    .required(errMessages.password_required),
  password: Yup.string().required(errMessages.pwd_error)
});

export const changeEmailSchema = Yup.object().shape({
  new_email: Yup.string()
    .email(errMessages.email_invalid)
    .required(errMessages.email_required),
  password: Yup.string().required(errMessages.pwd_error)
});

export const editProfileSchema = Yup.object().shape({
  username: Yup.string()
    .matches(/^[a-zA-Z0-9_-]{1,100}$/, errMessages.username_invalid)
    .min(3, errMessages.username_short)
    .max(30, errMessages.username_long)
    .required(errMessages.username_required),
  name: Yup.string()
    .matches(/^(?![\s.]+$)[a-zA-Z\s.]*$/, errMessages.name_invalid)
    .max(30, errMessages.name_long)
});

export const addTripSchema = Yup.object().shape({
  title: Yup.string()
    .required(errMessages.error_title_required)
    .max(100, errMessages.error_title_max)
});
