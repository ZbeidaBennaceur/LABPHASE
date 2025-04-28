import React from 'react'
import { Spinner } from 'react-bootstrap'

const Loading = () => {
  return (
    <div style={{marginTop:"5em",display:"flex", justifyContent:"center",alignItems:"center"}}>
    <Spinner animation="border" variant="secondary" />
    </div>
  )
}

export default Loading
