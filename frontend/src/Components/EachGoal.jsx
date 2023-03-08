import React from "react";
import { FaEdit, FaWindowClose } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteAGoal, getAGoal } from "../features/goalRedux/goalSlice";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const EachGoal = ({ goal, modal, setModal }) => {
  const dispatch = useDispatch();
  return (
    <div className="goal">
      <div>{new Date(goal.createdAt).toLocaleString("en-US")}</div>
      <h2>{goal.goal}</h2>
      <button
        className="Edit"
        onClick={() => {
          setModal(!modal);
          dispatch(getAGoal(goal._id));
        }}
      >
        <FaEdit />
      </button>
      <button
        className="close"
        onClick={async() => {
          Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              dispatch(deleteAGoal(goal._id));
              toast.success("Goal deleted")
            }
          })
        }}
      >
        <FaWindowClose />
      </button>
    </div>
  );
};

export default EachGoal;
