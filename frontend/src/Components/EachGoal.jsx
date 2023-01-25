import React from 'react'
import { FaEdit, FaWindowClose } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { deleteAGoal, getAGoal } from '../features/goalRedux/goalSlice';

const EachGoal = ({goal, modal, setModal}) => {
  const dispatch = useDispatch()
  return (
    <div className='goal'>
      <div>
        {new Date(goal.createdAt).toLocaleString("en-US")}
      </div>
      <h2>{goal.goal}</h2>
      <button className="Edit" onClick={()=>{
        setModal(!modal)
        dispatch(getAGoal(goal._id))
      }}>
        <FaEdit />
      </button>
      <button className="close" onClick={()=>{
        dispatch(deleteAGoal(goal._id))
      }}>
        <FaWindowClose />
      </button>
    </div>
  )
}

export default EachGoal