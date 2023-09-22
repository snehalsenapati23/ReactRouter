import React from 'react'
import { useParams } from 'react-router-dom'
const User = () => {
const {userid}=useParams();

  return (
    <div className='text-center text-4xl bg-slate-600 text-blue-400 p-4'>User Id : {userid}</div>
  )
}

export default User