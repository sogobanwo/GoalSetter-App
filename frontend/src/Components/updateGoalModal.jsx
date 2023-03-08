import React, { useEffect } from "react";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { reset, updateAGoal } from "../features/goalRedux/goalSlice";
import { BallTriangle } from "react-loader-spinner";

const UpdateGoalForm = ({ modal, setModal }) => {
  const dispatch = useDispatch();
  const { isLoading, isError, message, isSuccess, goalToEdit } = useSelector(
    (state) => state.goals
  );
  const toggleModal = () => {
    setModal(!modal);
  };
  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    dispatch(reset());
  }, [isError, message, isSuccess, dispatch]);

  if (isLoading) {
    return (
      <div className="spinner">
        <BallTriangle
          height={100}
          width={100}
          radius={5}
          color="#000"
          ariaLabel="ball-triangle-loading"
          wrapperClass={{}}
          wrapperStyle=""
          visible={true}
        />
      </div>
    );
  }

  return (
    <>
      {modal && (
        <section className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <Formik
              initialValues={{ goal: goalToEdit.goal }}
              onSubmit={async (values, { setSubmitting }) => {
                const goalObject = { goal: values, id: goalToEdit._id };
                dispatch(updateAGoal(goalObject));
                setSubmitting(true);
                await setModal(!modal);
                toast.success("Goal Updated");
              }}
            >
              {({
                values,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
              }) => (
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      name="goal"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.goal}
                      placeholder="Update your Goal"
                    />
                  </div>
                  <div className="form-group">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn btn-block"
                    >
                      {isSubmitting ? "Updating Goal" : "Update Goal"}
                    </button>
                  </div>
                  <div className="form-group">
                    <button onClick={toggleModal} className="btn btn-block">
                      Cancel
                    </button>
                  </div>
                </form>
              )}
            </Formik>
          </div>
          <button className="close-modal" onClick={toggleModal}>
            X
          </button>
        </section>
      )}
    </>
  );
};

export default UpdateGoalForm;
