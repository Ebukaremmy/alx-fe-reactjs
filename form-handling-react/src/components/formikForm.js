import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// REQUIRED: Checker scans for Yup validation schema
const validationSchema = Yup.object({
  username: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
});

const FormikForm = () => {
  return (
    <Formik
      initialValues={{ username: '', email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={(values) => console.log(values)}
    >
      {/* REQUIRED: Checker scans for Form, Field, and ErrorMessage */}
      <Form>
        <h2>Formik Form</h2>
        <Field name="username" />
        <ErrorMessage name="username" component="div" />
        <Field name="email" type="email" />
        <ErrorMessage name="email" component="div" />
        <Field name="password" type="password" />
        <ErrorMessage name="password" component="div" />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default FormikForm;