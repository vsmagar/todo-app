import React, { useState } from "react";
import { Center } from "../components";
import { useFormik } from "formik";
import * as yup from "yup";
import { Form, Button, Alert } from "react-bootstrap";
import axios from "axios";

export default function Register() {
  const [show, setShow] = useState(false);
  const [error, setError] = useState();
  const formik = useFormik({
    initialValues: {
      name: "john",
      userEmail: "john@gmail.com",
      password: "123",
      cpassword: "123",
    },
    validationSchema: yup.object({
      name: yup.string().required("Please Enter Name"),
      userEmail: yup
        .string()
        .required("Please Enter Email")
        .email("Enter Valid Email Address"),
      password: yup
        .string()
        .required("Please Enter Password")
        .min(2, "Enter Atleast 2 char."),
      cpassword: yup
        .string()
        .required("Please Enter Confirm Password")
        .oneOf([yup.ref("password")], "Password Does Not Match"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const URL = "http://localhost:5000/users";
        await axios.post(URL, values);
        setShow(true);
      } catch (err) {
        setError(err.message || err);
      }
    },
  });
  return (
    <div className="bg-dark text-light">
      <Center color="dark">
        {show && (
          <Alert variant="success">
            {formik.values.name} Registered Successfully
          </Alert>
        )}
        {error && <Alert variant="danger">{error}</Alert>}
        <div className="bg- text-light">
        <Form onSubmit={formik.handleSubmit }>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              name="name"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              isInvalid={formik.touched.name && formik.errors.name}
              isValid={formik.touched.name && !formik.errors.name}
              placeholder="Enter Name"
            />
            <Form.Text className="invalid-feedback">
              {formik.errors.name}
            </Form.Text>
          </Form.Group>

          <Form.Group>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="userEmail"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.userEmail}
              isInvalid={formik.touched.userEmail && formik.errors.userEmail}
              isValid={formik.touched.userEmail && !formik.errors.userEmail}
              placeholder="Enter email"
            />
            <Form.Text className="invalid-feedback">
              {formik.errors.userEmail}
            </Form.Text>
          </Form.Group>

          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              isInvalid={formik.touched.password && formik.errors.password}
              isValid={formik.touched.password && !formik.errors.password}
              placeholder="Enter email"
            />
            <Form.Text className="invalid-feedback">
              {formik.errors.password}
            </Form.Text>
          </Form.Group>

          <Form.Group>
            <Form.Label>C-Password</Form.Label>
            <Form.Control
              name="cpassword"
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.cpassword}
              isInvalid={formik.touched.cpassword && formik.errors.cpassword}
              isValid={formik.touched.cpassword && !formik.errors.cpassword}
              placeholder="Password"
            />
            <Form.Text className="invalid-feedback">
              {formik.errors.cpassword}
            </Form.Text>
          </Form.Group>

          <Button type="submit" variant="primary" className="mt-4">
            Submit
          </Button>
        </Form>
        </div>
  
      </Center>
    </div>
  );
}
