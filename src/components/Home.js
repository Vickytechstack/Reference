import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import axios from "axios";
import {
  Button,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Modal,
  FormGroup,
  Label,
} from "reactstrap";
import { Formik, Field, Form } from "formik";
const Home = () => {
  const [modal, setModal] = useState(false);
  const [data, setData] = useState([]);
  const [editData, seteditData] = useState({ email: "", first_name: "" });
  const toggle = () => {
    setModal(!modal);
  };
  const handleSubmit = (values) => {
    console.log(values);
    toggle();
  };

  const handleEdit = (u) => {
    seteditData(u);
    toggle();
  };

  const validation = Yup.object().shape({
    email: Yup.string().required("srfwghuwey").trim(),
    // Age: Yup.string().required("srfwghuwey"),
  });

  useEffect(() => {
    axios("https://reqres.in/api/users").then((res) => setData(res.data.data));
  });

  return (
    <>
      <div>
        <h1 className="heading">Practice</h1>
      </div>
      <Button color="primary" onClick={toggle}>
        Add
      </Button>
      <Modal toggle={toggle} isOpen={modal}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <Formik
          initialValues={editData}
          onSubmit={handleSubmit}
          validationSchema={validation}
          validateOnBlur={false}
        >
          {({ errors, values, setFieldValue }) => (
            <Form>
              <ModalBody>
                <FormGroup>
                  <Label>degheru</Label>
                  <Field
                    name="email"
                    placeholder="ergreh"
                    className="form-control"
                  />
                  {errors.email && <p>{errors.email}</p>}
                </FormGroup>
                <input
                  type="text"
                  value={values.first_name}
                  className="form-control"
                  onChange={(e) => setFieldValue("first_name", e.target.value)}
                />
              </ModalBody>
              <ModalFooter>
                <FormGroup>
                  <Button color="primary" type="submit">
                    Do Something
                  </Button>{" "}
                  <Button onClick={toggle}>Cancel</Button>
                </FormGroup>
              </ModalFooter>
            </Form>
          )}
        </Formik>
      </Modal>
      <table>
        <thead>user</thead>
        {data?.map((u, i) => (
          <div key={i}>
            <tbody>
              {u.email}
              <button onClick={() => handleEdit(u)}>Edit</button>

              <button>Delete</button>
            </tbody>
          </div>
        ))}
      </table>
    </>
  );
};

export default Home;

// {({ errors, values, setFieldValue }) =>
