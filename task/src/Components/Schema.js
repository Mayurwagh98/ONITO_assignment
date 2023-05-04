import * as yup from "yup";

const schema = yup.object().shape({
    name: yup.string().required("Name is a Required Field!"),
    age: yup.string().required("Age is a Required Field!"),
    gender: yup.string().required("Gender is a Required Field!"),
    mobile: yup
      .string()
      .matches(/^(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}$/, "Invalid mobile number")
      .required(),
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
    emergency_no: yup
      .string()
      .matches(
        /^(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}$/,
        "Invalid emergency contact number"
      )
      .min(10)
      .max(10)
      .required(),
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

export {schema}