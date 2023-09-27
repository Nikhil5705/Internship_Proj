import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './login.css'; // Import your CSS file

export const Login = () => {
    const initialValues = {
        email: '',
        password: '',
    };

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email address').required('Required'),
        password: Yup.string()
            .required('Required')
            .min(6, 'Password must be at least 6 characters')
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
                'Password must contain at least one uppercase letter, one lowercase letter, one special character, and one number'
            ),
    });

    const onSubmit = (values) => {
        alert(`Logged in with Email: ${values.email} and Password: ${values.password}`);
    };


    return (
        <div className="login-container">
            <h1>Login</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                <Form>
                    <div className="form-field">
                        <label htmlFor="email">Email</label>
                        <Field type="email" id="email" name="email" className="input-field" />
                        <ErrorMessage name="email" component="div" className="error" />
                    </div>
                    <div className="form-field">
                        <label htmlFor="password">Password</label>
                        <Field type="password" id="password" name="password" className="input-field" />
                        <ErrorMessage name="password" component="div" className="error" />
                    </div>
                    <button type="submit">Login</button>
                </Form>
            </Formik>
        </div>
    );
};

