import React from 'react'
import { FaWindowClose } from "react-icons/fa";

const EachGoal = ({goal}) => {
  return (
    <div className='goal'>
      <div>
        {new Date(goal.createdAt).toLocaleString("en-US")}
      </div>
      <h2>{goal.text}</h2>
      <buttton className="close">
        <FaWindowClose />
      </buttton>
    </div>
  )
}

export default EachGoal