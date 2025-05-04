import React, { useState } from 'react'
import {Card,Button} from 'react-bootstrap'
import UserDetails from './UserDetails'
import ToSupprimer from './ToSupprimer'

const User = ({user}) => {
  const [details,setDetail]=useState(false)
  const [supprimer,setSupprimer]=useState(false)
    //console.log(user)
   // console.log(user.timestamp)
  return (
    <div>
<Card className="text-center" style={{margin:"auto" ,width:"80%" ,marginTop:"2rem"}}>
      <Card.Title>{user.name}</Card.Title>
      <Card.Body>
        <Card.Text>{user.email}</Card.Text>
        <Card.Text>
        {user.adress}
        </Card.Text>
        <Card.Text>
        {user.phone}
        </Card.Text>
        <Button variant="primary" className='buttonsecondary'onClick={()=>{setDetail(true)}}>Détails</Button>
        <Button variant="primary" className='buttonsecondarydel'onClick={()=>{setSupprimer(true)}}>Supprimer</Button>
      </Card.Body>
      <Card.Footer className="text-muted">
  {new Date(user.updatedAt).toLocaleDateString("fr-FR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  })}
</Card.Footer>
    </Card>
    <UserDetails show={details} handleClose={()=>setDetail(false)} user={user}/>
    <ToSupprimer show={supprimer} handleClose={()=>setSupprimer(false)} user={user}/>
    </div>
  )
}

export default User
