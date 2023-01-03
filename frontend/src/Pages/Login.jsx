import { FaSignInAlt } from "react-icons/fa";
import { Formik } from "formik";
import { LoginSchema } from "../Utils/validations/ValidationSchema";

const Login = () => {
  return (
    <>
      <section className="heading">
        <h1>
          <FaSignInAlt /> Login
        </h1>
        <p>Login and start setting Goals</p>
      </section>
      <section className="form">
        <Formik
          initialValues={{ password: "", email: ""}}
          validationSchema={LoginSchema}
          onSubmit={async (values, { setSubmitting }) => {
            const { password, email } = values;
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
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-block"
                >
                  {isSubmitting ? "Logging In" : "Login"}
                </button>
              </div>
            </form>
          )}
        </Formik>
      </section>
    </>
  );
};

export default Login;
