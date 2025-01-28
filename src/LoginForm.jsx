import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { NavLink, useNavigate } from "react-router-dom";

const LoginForm = () => {
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
            navigate('/transactions')
        },
    });

    return (
        <div className=" flex justify-center items-center h-screen flex-col w-full bg-gray-100 gap-8">

            <div className=" w-full flex justify-center items-center ">
                <form
                    onSubmit={formik.handleSubmit}
                    className="w-full max-w-md p-6 bg-white shadow-md rounded-lg"
                >
                    <h2 className="text-2xl font-bold text-center mb-6">BankIT Login Form</h2>

                    {/* Email Field */}
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

                    {/* Password Field */}
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

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Login
                    </button>
                </form>
            </div>
            {/* <NavLink to="/transactions" className="text-blue-500 hover:underline">View Transactions</NavLink> */}
        </div>
    );
};

export default LoginForm;
