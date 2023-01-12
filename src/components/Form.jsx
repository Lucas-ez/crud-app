import React, { useState } from 'react'
import './form.css'

function Field({type, id, info}) {
  return (
    <div className='Field'>
      <label htmlFor={id}>{info}</label>
      <input type={type} id={id} name={id}/>
    </div>
  )
}

function Form({id}) {

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <form className='Form' onSubmit={handleSubmit}>
      <Field type={'text'} id={'firstName'} info='First Name'/>
      <Field type={'text'} id={'lastName'} info='Last Name'/>
      <Field type={'email'} id={'email'} info='Email'/>
      <Field type={'date'} id={'birthDate'} info='Birthdate'/>
      <button>Add</button>
    </form>
  )
}

export default Form