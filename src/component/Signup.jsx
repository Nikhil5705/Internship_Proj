import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './signup.css'; // Import your CSS file

export const Signup = () => {
    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    };

    const validationSchema = Yup.object({
        firstName: Yup.string().required('Required'),
        lastName: Yup.string().required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
        password: Yup.string()
            .required('Required')
            .min(6, 'Password must be at least 6 characters')
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
                'Password must contain at least one uppercase letter, one lowercase letter, one special character, and one number'
            ),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Required'),
    });

    const onSubmit = (values) => {
        alert(`
    Signed up with:
    First Name: ${values.firstName}
    Last Name: ${values.lastName}
    Email: ${values.email}
    Password: ${values.password}
    Confirm Password: ${values.confirmPassword}
  `);

    };

    return (
        <div className="signup-container">
            <h1>Signup</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                <Form>
                    <div className="form-field">
                        <label htmlFor="firstName">First Name</label>
                        <Field type="text" id="firstName" name="firstName" className="input-field" />
                        <ErrorMessage name="firstName" component="div" className="error" />
                    </div>
                    <div className="form-field">
                        <label htmlFor="lastName">Last Name</label>
                        <Field type="text" id="lastName" name="lastName" className="input-field" />
                        <ErrorMessage name="lastName" component="div" className="error" />
                    </div>
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
                    <div className="form-field">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <Field type="password" id="confirmPassword" name="confirmPassword" className="input-field" />
                        <ErrorMessage name="confirmPassword" component="div" className="error" />
                    </div>
                    <button type="submit">Signup</button>
                </Form>
            </Formik>
        </div>
    );
};


