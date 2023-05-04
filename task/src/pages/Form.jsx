import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import "./Form.css";
import { useNavigate } from "react-router-dom";
import Modal from "@mui/material/Modal";
import Alert from "@mui/material/Alert";
import { ErrorAlert } from "../Components/ErrorAlert";
import { schema } from "../Components/Schema";

const Form = () => {
  let navigate = useNavigate();
  let [flag, setFlag] = useState(false);
  const [open, setOpen] = React.useState(false);

  // ----------- exporting register and handleSubmit func from useForm---------------
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  //  ----------------- posting the data -----------
  let handleRegister = async (data) => {
    await axios
      // .post("http://localhost:8080/user", data)
      .post("https://onito-backend-jwvv.onrender.com/user", data)
      .then((res) => {
        console.log(res.data);
        setFlag(true);
        setOpen(true);
        setTimeout(() => {
          setOpen(false);
          navigate("/dashboard");
        }, 1400);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      <h2 style={{ textDecoration: "underline", fontFamily: "sans-serif" }}>
        Registration Form
      </h2>
      {/* ------------ modal for successful registration -------------- */}
      {flag ? (
        <Modal
          open={open}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Alert variant="filled" severity="success" style={{ border: "none" }}>
            Successfully Registered!
          </Alert>
        </Modal>
      ) : null}

      {/* ------------ modal for displaying errors --------------------  */}
      {errors && <ErrorAlert errors={errors} />}

      {/* ------------- form ---------------- */}
      <form onSubmit={handleSubmit(handleRegister)}>
        {/* -------------- Personal Details ----------------- */}
        <section className="personal_details">
          <h3>Personal Details</h3>
          <div className="personal_details_child1">
            <label>
              Name <span>*</span>
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              {...register("name")}
            />

            <label>
              Age <span>*</span>
            </label>
            <input
              type="number"
              placeholder="Enter your age"
              {...register("age")}
            />

            <label>
              Gender <span>*</span>
            </label>
            <select id="gender" {...register("gender")}>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div>
            <label>Mobile</label>
            <button className="india_number">+91</button>
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

            <input
              type="text"
              placeholder="Enter Govt ID"
              {...register("govtId")}
            />
          </div>
        </section>
        {/* ----------------- Contact Details ---------------- */}
        <section className="contact_details">
          <h3>Contact Details</h3>
          <div>
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
          </div>
          <div>
            <label>Emergency Contact Number</label>
            <input
              type="text"
              placeholder="Enter Emergency Number"
              {...register("emergency_no")}
            />
          </div>
        </section>
        {/* ---------------- Address Details ------------------ */}
        <section className="address_details">
          <h3>Address Details</h3>
          <div>
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
          </div>
          <div>
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
          </div>
        </section>
        {/* -------------- Other Details ----------------------- */}
        <section className="other_details">
          <h3>Other Details</h3>
          <div>
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
          </div>
          <div>
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
          </div>
        </section>
        <input type="submit" value="Submit" className="submit_input" />
      </form>
    </div>
  );
};

export { Form };
