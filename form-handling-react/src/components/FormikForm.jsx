import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function FormikForm() {
  const initialValues = {
    username: "",
    email: "",
    password: ""
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required")
  });

  const onSubmit = (values) => {
    console.log("Formik Submitted:", values);
    alert("Formik Registration Successful!");
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <h2>Formik Registration Form</h2>

        <Field type="text" name="username" placeholder="Username" />
        <ErrorMessage name="username" component="p" />

        <Field type="email" name="email" placeholder="Email" />
        <ErrorMessage name="email" component="p" />

        <Field type="password" name="password" placeholder="Password" />
        <ErrorMessage name="password" component="p" />

        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
}
