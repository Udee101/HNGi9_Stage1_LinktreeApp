import React from "react"

const FormInput = (props) => {
  const { label, onChange, id, hint, ...otherProps } = props;
  return (
    <div id="form_input">
      <label>{ label }</label>
      <input {...otherProps} onChange={onChange} id={id} required/>
      {hint ? <p className="hint">hint: example@gmail.com</p> : null}
    </div>
  )
}

export default FormInput