import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { loginEmailPassAsync, loginGoogle } from '../Redux/actions/actionLogin';

const SignupSchema = Yup.object().shape({
    email: Yup.string()
        .email('Enter a valid email')
        .required('This field is required'),
    password: Yup.string()
        .min(6, 'The password must be at least 6 characters')
        .max(50, 'The password must have a maximum of 50 characters')
        .required('This field is required'),
});

const Login = () => {

    const dispatch = useDispatch()

    //funcion para enviar el formulario
    const handleSubmit = (values) => {
        localStorage.setItem('email', values.email)
        dispatch(loginEmailPassAsync(values.email, values.password))
        localStorage.setItem('provider', values.password)
    }

    //funcion para iniciar sesion con google
    const handleGoogle = () => {
        dispatch(loginGoogle())
    }

    return (
        <div>

            <div>
                <Link to="/landingpage">
                    LOGO
                </Link>
            </div>

            <div >

                <div >
                    <h1>Welcome back.</h1>
                    <h2>
                        Signup into your account to add new
                        recipes, create meal plans and much more.
                    </h2>
                    <h3>
                        Don’t have an account yet?
                        <Link to="/register"><button>Sign up here.</button></Link>
                    </h3>
                </div>


                <div>
                    <div>
                        <Formik
                            initialValues={{
                                nombre: "",
                                email: "",
                                password: "",
                            }}
                            validationSchema={SignupSchema}
                            onSubmit={(values) => {
                                handleSubmit(values)
                            }}
                        >
                            {({ errors, touched }) => (
                                <Form>
                                    <div>
                                        <label>Email</label>
                                        <Field name="email" type="text" />
                                        {errors.email && touched.email ? (
                                            <div >
                                                {errors.email}
                                            </div>
                                        ) : null}
                                    </div>

                                    <div>
                                        <label>Password</label>
                                        <Field name="password" type="password" autoComplete="off" />
                                        {errors.password && touched.password ? (
                                            <div >
                                                {errors.password}
                                            </div>
                                        ) : null}
                                    </div>

                                    <h3>
                                        Restore your password
                                        <Link to="/restorepass">Restore.</Link>
                                    </h3>

                                    <button type="submit">
                                        Login
                                    </button>

                                </Form>
                            )}
                        </Formik>
                    </div>

                    <div >
                        <button onClick={handleGoogle}>
                            <i className="fa-brands fa-google"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
