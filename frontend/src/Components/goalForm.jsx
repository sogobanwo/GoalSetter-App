import React from 'react'
import {Formik} from "formik"

const GoalForm = () => {
  return (
    <section className='form'>
      <Formik
          initialValues={{ text: ""}}
          
          onSubmit={async (values, { setSubmitting }) => {
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
                  name="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.text}
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
    )
}

export default GoalForm