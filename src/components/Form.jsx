import { logDOM } from '@testing-library/react'
import React, { useState } from 'react'
import './form.css'

function Field({type, inputName, description, info, setInfo}) {

  const handleChange = (e) => {
    setInfo({
      ...info,
      [inputName]: e.target.value
    })
  }

  return (
    <div className='Field'>
      <label htmlFor={inputName}>{description}</label>
      <input type={type} id={inputName} name={inputName} value={info[inputName]} onChange={handleChange}/>
    </div>
  )
}

function Form({id}) {

  const initialInfo = {
    firstName: '',
    lastName: '',
    email: '',
    birthDate : ''
  }

  const [info, setInfo] = useState(initialInfo)

  const handleSubmit = (e) => {
    e.preventDefault()

    const arrBirthDate = info.birthDate.split('-')

    const response = {
      ...info,
      birthDate: {
        day: arrBirthDate[2],
        month: arrBirthDate[1],
        year: arrBirthDate[0]
      },
      id: id
    }

    console.log(response);
  }

  return (
    <form className='Form' onSubmit={handleSubmit}>
      <Field type={'text'} inputName={'firstName'} description='First Name' info={info} setInfo={setInfo}/>
      <Field type={'text'} inputName={'lastName'} description='Last Name' info={info} setInfo={setInfo}/>
      <Field type={'email'} inputName={'email'} description='Email' info={info} setInfo={setInfo}/>
      <Field type={'date'} inputName={'birthDate'} description='Birthdate' info={info} setInfo={setInfo}/>
      <button>Add</button>
    </form>
  )
}

export default Form