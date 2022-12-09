import React from 'react'
import UserItem from './UserItem'
import users from '../Users.json'

const UserList = () => {
  return (
    users.results.map(user=>{
        return(
            <UserItem 
            key={user.name.first}
            user={user}
             />
        )
            
        
    })
    
  )
}

export default UserList