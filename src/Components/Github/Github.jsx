import { data } from 'autoprefixer'
import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
//     const [data,setData]=useState([])
// useEffect(()=>{
//    fetch('https://api.github.com/users/snehalsenapati23')
//    .then(response=>response.json())
//    .then(data=>{
//     console.log(data)
//     setData(data)
//    })
// },[])
const data=useLoaderData()

  return ( 
   <>
   <div className="bg-slate-600"> <div className='text-center text-4xl  text-blue-400 p-4'>Github Repositories: {data.public_repos}</div>
    <div className="  -screen flex items-center justify-center m-6 "><img src={data.avatar_url} className=' border-spacing-4  rounded-full ' alt="" /></div></div>
   </>
  )
}

export default Github

export const GithubInfoLoader=async()=>{
    const response=await fetch('https://api.github.com/users/snehalsenapati23')
    return response.json()
}