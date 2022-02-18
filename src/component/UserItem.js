import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const UserItem = ({user}) => {
  return (
    <div>
        <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>{user.name}</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
    <Card.Text>
    {user.email}
    </Card.Text>
<Link to={"/Detail/"+user.id}>
    <button style = {{ background:'blue'}}>More Detail</button></Link>

  </Card.Body>
</Card>
    </div>
  )
}

export default UserItem