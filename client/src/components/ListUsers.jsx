import React from 'react'
import User from './User'
import { useSelector } from 'react-redux'
import Loading from './Loading'

const ListUsers = () => {
    const users=useSelector((state)=>state.userReducer.usersList)
    const isLoad=useSelector((state)=>state.userReducer.isLoad)
  //  console.log(isLoad)

  return (
    
    <div>
    {isLoad && <Loading/>}
    {users.map(user=><User key={user._id} user={user}/>)}
    </div>
  )
}

export default ListUsers

