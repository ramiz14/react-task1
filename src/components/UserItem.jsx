import React from 'react'

const UserItem = (props) => {
  return (
    <ul>
        <li>Gender:{props.user.gender}</li>
        <li>Full Name:{props.user.name.first} {props.user.name.last}</li>
    </ul>
  )
}

export default UserItem