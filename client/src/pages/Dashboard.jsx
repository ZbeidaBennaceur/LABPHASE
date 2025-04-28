import React, {useEffect} from 'react'
import ListUsers from '../components/ListUsers'
import { useDispatch, useSelector } from 'react-redux'
import {getUsers} from '../JS/actions/userAction'
import Loading from '../components/Loading'

const Dashboard = () => {
  const isLoad=useSelector((state)=>state.auth.isLoad)
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(getUsers())
  },[dispatch])
  return (
    <div>
      {isLoad && <Loading/>}
      <ListUsers/>
    </div>
  )
}

export default Dashboard
