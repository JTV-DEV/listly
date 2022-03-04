import React from 'react'

function Item({name, quantity}) {
  
  return (
    <div>
      <span>{name}</span>
      <span>{quantity}</span>
    </div>
  )
}

export default Item