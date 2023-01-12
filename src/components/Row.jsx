import React from 'react'

function Row({props}) {

  const {birthDate, email, firstName, lastName} = {...props}

  return (
    <tr>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{`${birthDate.day}/${birthDate.month}/${birthDate.year}`}</td>
      <td>{email}</td>
    </tr>
  )
}

export default Row