import React, { useEffect } from "react";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addNewGoal, reset } from "../features/goalRedux/goalSlice";
import { BallTriangle } from "react-loader-spinner";

const GoalForm = () => {
  const dispatch = useDispatch();
  const { isLoading, isError, message, isSuccess, goals } = useSelector(
    (state) => state.goals
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    dispatch(reset());
  }, [isError, message, isSuccess, dispatch]);

  if(isLoading){
    return <BallTriangle
    height={100}
    width={100}
    radius={5}
    color="#000"
    ariaLabel="ball-triangle-loading"
    wrapperClass={{}}
    wrapperStyle=""
    visible={true}
  />
  }

  return (
    <section className="form">
      <Formik
        initialValues={{ goal: "" }}
        onSubmit={async (values, { setSubmitting }) => {
          dispatch(addNewGoal(values))
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
                name="goal"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.goal}
                placeholder="Set your Goal"
              />
            </div>
            <div className="form-group">
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-block"
              >
                {isSubmitting ? "Creating Goal" : "Create Goal"}
              </button>
            </div>
          </form>
        )}
      </Formik>
    </section>
  );
};

export default GoalForm;