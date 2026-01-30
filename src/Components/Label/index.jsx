import React from 'react'

function Label({htmlFor,nome}) {
  return (
<label htmlFor={htmlFor} >
    {nome}
</label>
  )
}

export default Label