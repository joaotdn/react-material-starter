import React from 'react'
import PropTypes from 'prop-types'
import UserLink from './UserLink'

const ListUsers = ({users=[]}) => {
  return (
    <ul>
      {users && users.length > 0
        ? users.map(user => (
          <li key={user.id}><UserLink label={user.name} userId={user.id} /></li>
        )) : null
      }
    </ul>
  )
}

ListUsers.propTypes = {
  users: PropTypes.array,
  history: PropTypes.object.isRequired
}

export default ListUsers