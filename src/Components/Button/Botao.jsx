import React from 'react'

function Botao({type,valor,className,onChange,onClick }) {
  return (
 <button onChange={onChange}type={type} className={className }onClick={onClick}>{valor} </button>
  )
}

export default Botao