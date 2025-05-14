import React from 'react'
import User from './User'
import { useSelector } from 'react-redux'
import Loading from './Loading'

const ListUsers = () => {
   const users = useSelector((state) => state.user.usersList);
const isLoad = useSelector((state) => state.user.isLoad);
  //  console.log(isLoad)

  return (
    
    <div>
    {isLoad && <Loading/>}
   {users && users.length > 0 ? (
    
  users
  .filter(user => !user.isAdmin)
  .map(user => <User key={user._id} user={user} />)
) : (
  !isLoad && <p>Aucun utilisateur trouvé.</p>
)}
    </div>
  )
}

export default ListUsers

