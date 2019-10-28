import React from "react";
import { withFormik, Form, Field } from "formik";
import axios from "axios";

function FormComp() {
  return (
    <Form>
      <h1>Add A Smurf To Your Village</h1>
      <div>
        <Field type="text" name="name" placeholder="Name" />
      </div>
      <div>
        <Field type="text" name="age" placeholder="Age" />
      </div>
      <div>
        <Field type="text" name="height" placeholder="Height" />
      </div>
      <button>Submit</button>
    </Form>
  );
}

const SmurfFormik = withFormik({
    mapPropsToValues({ name, age, height }) {

        return {
            name: name || "",
            age: age || "",
            height: height || ""
        };
    },
    handleSubmit(values, { resetForm }, props) { 
        axios
            .post('http://localhost:3333/smurfs', values)
            .then(res => {
                console.log(res);
                resetForm();
                props.setSmurfs(res.data)
            })
            .catch(err => {
                console.log(err);
            });
    }
})(FormComp);

export default SmurfFormik;
