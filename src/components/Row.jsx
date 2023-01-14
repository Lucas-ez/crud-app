import React from 'react'

function Row({info, remove}) {

  const {id, birthDate, email, firstName, lastName} = {...info}

  return (
    <tr>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{`${birthDate.day}/${birthDate.month}/${birthDate.year}`}</td>
      <td>{email}</td>
      <td>
        <button onClick={() => remove(id)}>X</button>
      </td>
    </tr>
  )
}

export default Row