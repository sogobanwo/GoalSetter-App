import { FaUser } from "react-icons/fa";
import { Formik } from "formik";
import { RegisterSchema } from "../Utils/validations/ValidationSchema";
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import {toast} from "react-toastify"
import { registerUser, reset } from "../features/AuthRedux/authSlice"

const Register = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user, isLoading, isError, message, isSuccess } = useSelector()

  return (
    <>
      <section className="heading">
        <h1>
          <FaUser /> Register
        </h1>
        <p>Create an account</p>
      </section>
      <section className="form">
        <Formik
          initialValues={{ name: "", email: "", password: "", cpassword: "" }}
          validationSchema={RegisterSchema}
          onSubmit={async (values, { setSubmitting }) => {
            const { name, password, email } = values;
            console.log(values)
            setSubmitting(true);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  placeholder="Enter your name"
                />
                {errors.name && touched.name ? (
                  <div
                    style={{
                      textAlign: "left",
                      color: "orangered",
                      fontSize: "13px",
                    }}
                  >
                    {errors.name}
                  </div>
                ) : null}
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder="Enter your email-address"
                />
                {errors.email && touched.email ? (
                  <div
                    style={{
                      textAlign: "left",
                      color: "orangered",
                      fontSize: "13px",
                    }}
                  >
                    {errors.email}
                  </div>
                ) : null}
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder="Enter your password"
                />
                {errors.password && touched.password ? (
                  <div
                    style={{
                      textAlign: "left",
                      color: "orangered",
                      fontSize: "13px",
                    }}
                  >
                    {errors.password}
                  </div>
                ) : null}
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="cpassword"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.cpassword}
                  placeholder="Confirm your password"
                />
                {errors.cpassword && touched.cpassword ? (
                  <div
                    style={{
                      textAlign: "left",
                      color: "orangered",
                      fontSize: "13px",
                    }}
                  >
                    {errors.cpassword}
                  </div>
                ) : null}
              </div>
              <div className="form-group">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-block"
                >
                  {isSubmitting ? "Registering" : "Register"}
                </button>
              </div>
            </form>
          )}
        </Formik>
      </section>
    </>
  );
};

export default Register;
