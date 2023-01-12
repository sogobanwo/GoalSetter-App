import React from 'react'
import { FaWindowClose } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { deleteAGoal } from '../features/goalRedux/goalSlice';

const EachGoal = ({goal}) => {
  const dispatch = useDispatch()
  return (
    <div className='goal'>
      <div>
        {new Date(goal.createdAt).toLocaleString("en-US")}
      </div>
      <h2>{goal.goal}</h2>
      <buttton className="close" onClick={()=>{
        dispatch(deleteAGoal(goal._id))
      }}>
        <FaWindowClose />
      </buttton>
    </div>
  )
}

export default EachGoal