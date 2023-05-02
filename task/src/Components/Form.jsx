import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const Form = () => {
  const schema = yup.object().shape({
    name: yup.string().required(),
    age: yup.number().positive().integer().required(),
    gender: yup.string().required(),
    mobile: yup.string().min(10).max(10).required(),
    issueId: yup.string().required("ID Type is required"),
    govtId: yup
      .string()
      .test("govtId", "Invalid government ID", function (value) {
        const issueId = this.parent.issueId;
        if (issueId === "aadhar") {
          return /^\d{12}$/.test(value);
        } else if (issueId === "pan") {
          return /^[\w\d]{10}$/.test(value);
        }
        return true;
      }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  let handleRegister = async (data) => {
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
          <select id="gender" {...register("gender")}>
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
          <select id="issue_id" {...register("issueId")}>
            <option value="aadhar">Aadhar</option>
            <option value="pan">PAN</option>
          </select>
          {errors.issueId && <p>{errors.issueId.message}</p>}
          <input
            type="text"
            placeholder="Enter Govt ID"
            {...register("govtId")}
          />
          {errors.govtId && <p>{errors.govtId.message}</p>}
          <input type="submit" value="Submit" />
        </section>
      </form>
    </div>
  );
};

export { Form };
