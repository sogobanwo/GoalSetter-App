import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import GoalForm from "../Components/goalForm";
import { getAllGoals, reset } from "../features/goalRedux/goalSlice";
import { BallTriangle } from "react-loader-spinner";
import EachGoal from "../Components/EachGoal";
import UpdateGoalForm from "../Components/updateGoalModal";
import ReactPaginate from "react-paginate";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [modal, setModal] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);
  const { goals, isLoading, isError, message, goalToEdit } = useSelector(
    (state) => state.goals
  );

  useEffect(() => {
    if (!user) {
      navigate("/login");
    } else {
      if (isError) {
        console.log(message);
      }

      dispatch(getAllGoals());

      return () => dispatch(reset());
    }
  }, [user, isError, message, goalToEdit, navigate, dispatch]);

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

  // Pagination start

  const goalsPerPage = 4;
  const goalsPassed = goalsPerPage * pageNumber;

  const displayGoals = goals
    .slice(goalsPassed, goalsPassed + goalsPerPage)
    .map((goal) => {
      return (
        <EachGoal
          key={goal._id}
          goal={goal}
          modal={modal}
          setModal={setModal}
        />
      );
    });

  const pageCount = Math.ceil(goals.length / goalsPerPage);

  const pageChange = ({ selected }) => {
    setPageNumber(selected);
  };
  // End of Pagination

  return (
    <>
      <section className="heading">
        <h1> Welcome {user && user.name}</h1>
        <p>Goals Dashboard</p>
      </section>
      <GoalForm />
      <section className="content">
        {goals.length > 0 ? (
          <div className="goals">{displayGoals}</div>
        ) : (
          <h3> You do not have any goal set yet</h3>
        )}
        {goals.length > goalsPerPage ? (
          <ReactPaginate
            previousLabel={<FaArrowLeft />}
            nextLabel={<FaArrowRight />}
            pageCount={pageCount}
            onPageChange={pageChange}
            containerClassName={"paginateContainer"}
            previousLinkClassName={"paginatePrevious"}
            nextLinkClassName={"paginateNext"}
            activeClassName={"currentPage"}
          />
        ) : null}
      </section>
      <UpdateGoalForm modal={modal} setModal={setModal} />
    </>
  );
};

export default Dashboard;
