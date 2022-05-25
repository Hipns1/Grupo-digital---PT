import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { registerAsync } from '../Redux/actions/actionRegister';

//validaciones de cada input
const SignupSchema = Yup.object().shape({
    nombre: Yup.string()
        .min(3, 'The name must have at least 2 characters')
        .max(50, 'The name must have a maximum of 50 characters')
        .required('This field is required'),
    email: Yup.string()
        .email('Enter a valid email')
        .required('This field is required'),
    password: Yup.string()
        .min(6, 'The password must be at least 6 characters')
        .max(50, 'The password must have a maximum of 50 characters')
        .required('This field is required'),
    pass2: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords do not match')
        .required('This field is required'),
});


const Register = () => {
    const dispatch = useDispatch();

    //funcion para dispatch de register y set usuario en localStorage
    const handleSubmit = (values) => {
        localStorage.setItem('email', values.email)
        dispatch(registerAsync(values.email, values.password, values.nombre))
    }

    return (
        <div>

            <div >
                <Link to="/landingpage">
                    LOGO
                </Link>
            </div>

            <div>

                <div >
                    LOGO
                    <h1>Hello, there.</h1>
                    <h2>
                        Signup into your account to add new
                        recipes, create meal plans and much more.
                    </h2>
                    <h3>
                        Do you already have an account?
                        <Link to="/login"><button>Login here</button></Link>
                    </h3>
                </div>

                <div>
                    <div>
                        <Formik
                            initialValues={{
                                nombre: "",
                                email: "",
                                password: "",
                                pass2: "",
                            }}
                            validationSchema={SignupSchema}
                            onSubmit={(values) => {
                                handleSubmit(values)
                            }}
                        >
                            {({ errors, touched }) => (
                                <Form>
                                    <div>
                                        <label>Name</label>
                                        <Field name="nombre" type="text" />
                                        {errors.nombre && touched.nombre ? (
                                            <div >
                                                {errors.nombre}
                                            </div>
                                        ) : null}
                                    </div>

                                    <div>
                                        <label>Email</label>
                                        <Field name="email" type="text" />
                                        {errors.email && touched.email ? (
                                            <div >
                                                {errors.email}
                                            </div>
                                        ) : null}
                                    </div>

                                    <div >
                                        <label>Password</label>
                                        <Field name="password" type="password" autoComplete="off" />
                                        {errors.password && touched.password ? (
                                            <div >
                                                {errors.password}
                                            </div>
                                        ) : null}
                                    </div >

                                    <div >
                                        <label>Enter the password again</label>
                                        <Field name="pass2" type="password" autoComplete="off" />
                                        {errors.pass2 && touched.pass2 ? (
                                            <div >
                                                {errors.pass2}
                                            </div>
                                        ) : null}
                                    </div>

                                    <button type="submit">
                                        Create account
                                    </button>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;