import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import {  toast } from 'react-toastify';
import { useLogin } from "../context/LoginContext";


const LoginForm = () => {
    const { login } = useLogin() 
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email("Please enter a valid email address.")
                .required("Email is required."),
            password: Yup.string()
                .min(6, "Password must be at least 6 characters long.")
                .required("Password is required."),
        }),
        onSubmit: (values) => {
            // Simulate API call to check if email & password are correct
            setTimeout(() => {
                handleLogin(values)
            }, 1000);
        },
    });

    const handleLogin =  (values) => {
        if (values.email === 'test@test.com' && values.password === 'password') {
            toast.success('Login Successful')
            login()
            navigate('/transactions')
        } else {
            toast.error('Incorrect Email or Password')
        }
        formik.setSubmitting(false);
    }

    return (
        <div className=" flex justify-center items-center h-screen flex-col w-full bg-gray-100 gap-8">

            <div className=" w-full flex justify-center items-center ">
                <form
                    onSubmit={formik.handleSubmit}
                    className="w-full max-w-md p-6 bg-white shadow-md rounded-lg"
                >
                    <h2 className="text-xl font-bold text-center mb-6">BankIT Login Form</h2>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            {...formik.getFieldProps("email")}
                            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${formik.touched.email && formik.errors.email ? "border-red-500" : "border-gray-300"
                                }`}
                        />
                        {formik.touched.email && formik.errors.email && (
                            <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
                        )}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            {...formik.getFieldProps("password")}
                            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${formik.touched.password && formik.errors.password ? "border-red-500" : "border-gray-300"
                                }`}
                        />
                        {formik.touched.password && formik.errors.password && (
                            <p className="text-red-500 text-sm mt-1">{formik.errors.password}</p>
                        )}
                    </div>


                    <button
                        type="submit"
                        disabled={formik.isSubmitting}
                        className="w-full py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        {
                            formik.isSubmitting ? (
                                <span className="flex items-center justify-center">
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    </svg>
                                </span>
                            ) : (
                                "Login"
                            )
                        }
                    </button>
                </form>
            </div>
            
        </div>
    );
};

export default LoginForm;
