import React from 'react'

function Input({type,placeholder,name,id,onChange}) {
  return (
   <React.Fragment>
    <input onChange={onChange} type={type}  placeholder={placeholder} name={name} id={id}/>
    
   </React.Fragment>

  )
}

export default Input