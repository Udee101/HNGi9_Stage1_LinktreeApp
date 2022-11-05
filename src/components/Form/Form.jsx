import React from 'react'
import FormInput from './FormInput';

const inputs = [
  {
    label: "First name",
    name: "firstname",
    type: "text",
    placeholder: "Enter your first name",
    id: "first_name",
    hint: false,
    className: 'fn'
  },
  {
    label: "Last name",
    name: "lastname",
    type: "text",
    placeholder: "Enter your last name",
    id: "last_name",
    hint: false,
    className: 'ln'
  },
  {
    label: "Email",
    name: "email",
    type: "email",
    placeholder: "yourname@email.com",
    id: "email",
    hint: true
  },
]

const Form = () => {
  return (
    <div>Form</div>
  )
}

export default Form