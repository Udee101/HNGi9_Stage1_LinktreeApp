import React, {useState} from 'react'
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

  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
  });
  const [textarea, setTextarea] = useState({
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values,textarea);
    
  }
  
  // Track changes in input fields
  const onInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues(values => ({...values, [name]: value}))
  };
  
  
  // Track changes in textarea
  const onTextareaChange = (e) => {
    setTextarea({...textarea, [e.target.name]: e.target.value});
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        {inputs.map((input, i) => { 
          return(
            <div className={input.className} key={i}>
              <FormInput 
                 {...input}
                value={values[input.name]}
                onChange={onInputChange}
                id={input.id}
                hint={input.hint}
              />
            </div>
          )          
        })}

        <div className='message_box'>
          <p className='label'>Message</p>
          <textarea name="message" id="message" cols="30" rows="10" placeholder="Send me a message asnd I'll reply as soon as possible" onChange={onTextareaChange} ></textarea>
        </div>

        <div className="check">
          <input type="checkbox" name="checkbox" id="check_box" required/><span>You agree to providing your data to Frank Udeorah who may contact you.</span>
        </div>

        <button id='btn__submit' type='submit'>Send message</button>
      </form>
    </>
  )
}

export default Form