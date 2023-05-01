import React from "react";
import { Center } from "../../components";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { FloatingLabel } from "react-bootstrap";

export default function AddTodo() {
  const formik = useFormik({
    initialValues: {
      task: "Vishal",
      desc: "React JS",
      pariority: "",
      category: "",
    },
    validationSchema: yup.object({
      task: yup
        .string()
        .required("Please Enter Task")
        .min(3, "Enter atleast 3 char."),
      desc: yup
        .string()
        .required("Please Enter Desc")
        .min(5, "enter Atlear 5 char."),
      pariority: yup.string().required("Please Select Priority"),
      category: yup.string().required("Please Select Catogory"),
    }),
    onSubmit: async (values, { resetFata }) => {
      const URL = "http://localhost:5000/todos";
      const { data } = await axios.post(URL, values);
      console.log(data);
    },
  });
  return (
    <div className="bg-dark text-light">
      <Center>
        <Form onSubmit={formik.handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Enter Task</Form.Label>
            <Form.Control
              name="task"
              type="text"
              value={formik.values.task}
              onChange={formik.handleChange}
              isInvalid={formik.touched.task && formik.errors.task}
              isValid={formik.touched.task && !formik.errors.task}
              placeholder="Enter Task"
            />
            <Form.Text className="invalid-feedback">
              {formik.errors.task}
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Description</Form.Label>

            <FloatingLabel
              controlId="floatingTextarea2"
              label="Add Description"
            >
              <Form.Control
                name="desc"
                type="text"
                value={formik.values.desc}
                onChange={formik.handleChange}
                isInvalid={formik.touched.desc && formik.errors.desc}
                isValid={formik.touched.desc && !formik.errors.desc}
                as="textarea"
                placeholder=" description"
                style={{ height: "75px" }}
              />
            </FloatingLabel>
          </Form.Group>

          <Form.Label>Priority</Form.Label>
          <Form.Select
            name="pariority"
            onChange={formik.handleChange}
            isInvalid={formik.touched.pariority && formik.errors.pariority}
            isValid={formik.touched.pariority && !formik.errors.pariority}
            aria-label="Default select example"
          >
            <option>Choose Option</option>
            <option value="High">High</option>
            <option value="Med">Med</option>
            <option value="Low">Low</option>
          </Form.Select>

          <Form.Label className="mt-3">category</Form.Label>
          <Form.Select
            name="category"
            onChange={formik.handleChange}
            isInvalid={formik.touched.category && formik.errors.category}
            isValid={formik.touched.category && !formik.errors.category}
            aria-label="Default select example"
          >
            <option>Choose Category</option>
            <option value="study">Study</option>
            <option value="persnal">Persnal</option>
            <option value="office">Office</option>
            <option value="college">College</option>
          </Form.Select>

          <Button variant="primary mt-3 " type="submit">
            Submit
          </Button>
        </Form>
      </Center>
    </div>
  );
}
