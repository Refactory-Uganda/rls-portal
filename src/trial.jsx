// import{ useState } from "react";
// import { Link } from "react-router-dom";
// import * as yup from "yup";
// import { Formik } from "formik";
// import { Button, Checkbox, TextField } from "@mui/material";
// import { Save } from "@mui/icons-material";
// import { LoadingButton } from "@mui/lab";
// import useLogin from "./hooks/useLogin";
// import "./assets/form-styles.css";

// const FloatingLabelInput = ({ label, name, type = "text", ...props }) => {
//   const [isFocused, setIsFocused] = useState(false);
//   const [hasValue, setHasValue] = useState(false);

//   return (
//     <div className={`floating-label-input ${isFocused || hasValue ? 'active' : ''}`}>
//       <TextField
//         name={name}
//         type={type}
//         onFocus={() => setIsFocused(true)}
//         onBlur={(e) => {
//           setIsFocused(false);
//           setHasValue(e.target.value !== "");
//         }}
//         onChange={(e) => setHasValue(e.target.value !== "")}
//         fullWidth
//         variant="outlined"
//         {...props}
//       />
//       <label>{label}</label>
//     </div>
//   );
// };

// function LoginForm(props) {
//   const { error, loading, errorMessage, handleLogin, setError } = useLogin();

//   const validationSchema = yup.object({
//     email: yup.string().email("Provide a valid email").required("Enter your email"),
//     password: yup.string().required("Enter your password"),
//   });

//   const buttonState = loading ? (
//     <LoadingButton
//       className="btnNext"
//       loading
//       loadingPosition="start"
//       startIcon={<Save />}
//       variant="contained"
//       fullWidth
//     >
//       Signing in
//     </LoadingButton>
//   ) : (
//     <Button type="submit" variant="contained" fullWidth>
//       Log In
//     </Button>
//   );

//   return (
//     <Formik
//       initialValues={{ email: "", password: "" }}
//       validationSchema={validationSchema}
//       onSubmit={(values) => handleLogin(values, props.userGroup)}
//     >
//       {({ handleSubmit, errors, touched }) => (
//         <form onSubmit={handleSubmit} method="POST">
//           <FloatingLabelInput
//             label="Email Address"
//             name="email"
//             error={touched.email && Boolean(errors.email)}
//             helperText={touched.email && errors.email}
//           />
//           <FloatingLabelInput
//             label="Password"
//             name="password"
//             type="password"
//             error={touched.password && Boolean(errors.password)}
//             helperText={touched.password && errors.password}
//           />
//           <div className="remember">
//             <Checkbox /> Remember me
//             <Link to="/user/password/forgot">Forgot Password?</Link>
//           </div>
//           {buttonState}
//         </form>
//       )}
//     </Formik>
//   );
// }

// export default LoginForm;