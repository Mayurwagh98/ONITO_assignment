import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const Form = () => {
  const { register, handleSubmit } = useForm();

  let handleRegister = async (data) => {
    // event.preventDefault();
    await axios
      .post("http://localhost:8080/user", data)
      .then((res) => {
        console.log(res.data);
      })
      .catch((e) => console.log(e));
  };

  return (
    <div>
      <h2>Form</h2>
      <form onSubmit={handleSubmit(handleRegister)}>
        <section>
          <h3>Personal Details</h3>
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            {...register("name")}
          />
          <label>Age</label>
          <input
            type="number"
            placeholder="Enter your age"
            {...register("age")}
          />
          <label>Gender</label>
          <select name="" id="gender" {...register("gender")}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <label>Mobile</label>
          <input
            type="number"
            placeholder="Enter your mobile number"
            {...register("mobile")}
          />
          <label>Govt Issue ID</label>
          <select name="" id="issue_id" {...register("issueId")}>
            <option value="aadhar">Aadhar</option>
            <option value="pan">PAN</option>
          </select>
          <input type="number" placeholder="Enter Govt ID" />
          <input type="submit" value="Submit" />
        </section>
      </form>
    </div>
  );
};

export { Form };
