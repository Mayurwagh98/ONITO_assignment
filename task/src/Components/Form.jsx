import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "./Form.css";

const Form = () => {
  const schema = yup.object().shape({
    name: yup.string().required("Name is a Required Field!"),
    age: yup.number().positive().integer().required("Age is a Required Field!"),
    gender: yup.string().required("Gender is a Required Field!"),
    mobile: yup
      .string()
      .min(10)
      .max(10)
      .required("Mobile number should be of min 10 digits"),
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
    guardian: yup.string(),
    guardian_name: yup.string(),
    email: yup.string().email(),
    emergency_no: yup.string().min(10).max(10).required(),
    address: yup.string(),
    state: yup.string(),
    city: yup.string(),
    country: yup.string(),
    pincode: yup.string(),
    occupation: yup.string(),
    region: yup.string(),
    marital_status: yup.string(),
    blood_group: yup.string(),
    nationality: yup.string(),
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
        {/* -------------- Personal Details ----------------- */}
        <section>
          <h3>Personal Details</h3>
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            {...register("name")}
          />
          {errors.name && <p>{errors.name.message}</p>}
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
        </section>
        {/* ----------------- Contact Details ---------------- */}
        <section>
          <h3>Contact Details</h3>
          <label>Guardian Details</label>
          <select {...register("guardian")}>
            <option value="mother">Mother</option>
            <option value="father">Father</option>
          </select>
          <input
            type="text"
            placeholder="Enter Gaurdian Name"
            {...register("guardian_name")}
          />
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter Your Email"
            {...register("email")}
          />
          <label>Emergency Contact Number</label>
          <input
            type="text"
            placeholder="Enter Emergency Number"
            {...register("emergency_no")}
          />
        </section>
        {/* ---------------- Address Details ------------------ */}
        <section>
          <h3>Address Details</h3>
          <label>Address</label>
          <input
            type="text"
            placeholder="Enter your address"
            {...register("address")}
          />
          <label>State</label>
          <select {...register("state")}>
            <option value="">Default</option>
            <option value="maharashtra">Maharashtra</option>
            <option value="assam">Assam</option>
            <option value="bihar">Bihar</option>
            <option value="gujrat">Gujrat</option>
          </select>
          <label>City</label>
          <input
            type="text"
            placeholder="Enter your city"
            {...register("city")}
          />
          <label>Country</label>
          <input
            type="text"
            placeholder="Enter your country"
            {...register("country")}
          />
          <label>Pincode</label>
          <input
            type="text"
            placeholder="Enter pincode"
            {...register("pincode")}
          />
        </section>
        {/* -------------- Other Details ----------------------- */}
        <section>
          <h3>Other Details</h3>
          <label>Occupation</label>
          <input
            type="text"
            placeholder="Enter your occupation"
            {...register("occupation")}
          />
          <label>Region</label>
          <input
            type="text"
            placeholder="Enter your region"
            {...register("region")}
          />
          <label>Marital Status</label>
          <select id="martial_status" {...register("marital_status")}>
            <option value="">Default</option>
            <option value="single">Single</option>
            <option value="married">Married</option>
          </select>
          <label>Blood Group</label>
          <select id="blood_group" {...register("blood_group")}>
            <option value="">Default</option>
            <option value="A+">A+</option>
            <option value="AB+">AB+</option>
            <option value="O+">O+</option>
          </select>
          <label>Blood Group</label>
          <input
            type="text"
            placeholder="Enter your nationality"
            {...register("nationality")}
          />
        </section>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export { Form };
