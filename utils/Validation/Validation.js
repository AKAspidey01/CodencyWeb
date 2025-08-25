import * as yup from 'yup';
import { ref } from "yup";


// export const signupschema = yup.object().shape({
//   email: yup
//     .string()
//     .email("Please enter valid Email")
//     .required('Email Address is Required'),
//   name: yup.string().required('Please Enter Your Name'),
//   number: yup.number().required('Please Enter Your Mobile Number').min(10 , "reuiresd"),
//   password: yup
//     .string().required('Please create a password'),
//   confirmPassword: yup 
//   .string()
//   .required("Please confirm your password")
//   .oneOf([ref("password")], "Passwords do not match"),
// })


export const aboutContactValidaion = yup.object().shape({
    fullName: yup.string().required('Please Enter Your Name'),
    phoneNumber: yup.number().required('Please Enter Your Mobile Number').min(10 , "Minimum 10 Numbers"),
    email: yup.string().email("Please enter valid Email").required('Email Address is Required')
})


export const aboutContactValidaion2 = yup.object().shape({
    fullName: yup.string().required('Please Enter Your Name'),
    phoneNumber: yup.number().required('Please Enter Your Mobile Number').min(10 , "Minimum 10 Numbers"),
    email: yup.string().email("Please enter valid Email").required('Email Address is Required')
})

export const ContactValidaion = yup.object().shape({
    userName: yup.string().required('Please Enter Your First Name'),
    phoneNumber: yup.number().required('Please Enter Your Mobile Number').min(10 , "Minimum 10 Numbers"),
    email: yup.string().email("Please enter valid Email").required('Email Address is Required')
})
export const LoginValidation = yup.object().shape({
    email: yup.string().email('Please Enter Valid Email').required('Email Address Required'),
    password: yup.string().required('Please create a password')
})

export const RegisterValidation = yup.object().shape({
    userName:  yup.string().required('Please Enter Your User Name'),
    mobileNumber: yup.number().required('Please Enter Your Mobile Number').min(10 , "Minimum 10 Numbers"),
    email: yup.string().email('Please Enter Valid Email').required('Email Address Required'),
    password: yup.string().required('Please create a password')
})

