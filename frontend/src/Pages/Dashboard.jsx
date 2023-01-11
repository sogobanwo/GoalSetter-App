import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import GoalForm from "../Components/goalForm";
import { getAllGoals, reset } from "../features/goalRedux/goalSlice";
import { BallTriangle } from "react-loader-spinner";
import EachGoal from "../Components/EachGoal";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { goals, isLoading, isError, message, isSuccess } = useSelector(
    (state) => state.goals
  );

 

  if (!user) {
    navigate("/login");
  }
  useEffect(() => {

    if (isError) {
      console.log(message);
    }

    

    dispatch(getAllGoals());

    return () => dispatch(reset());
  }, [user, navigate, dispatch, isError, message]);

  if (isLoading) {
    return (
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
    );
  }

  return (
    <>
      <section className="heading">
        <h1> Welcome {user && user.name}</h1>
        <p>Goals Dashboard</p>
      </section>
      <GoalForm />
      <section className="content">
        {goals.length > 0 ? (
          <div className="goals">
            {goals.map((goal)=>{
              return <EachGoal key={goal._id} goal={goal}/>
            })}
          </div>
        ) : (
          <h3> You do not have any goal set yet</h3>
        )}
      </section>
    </>
  );
};

export default Dashboard;
