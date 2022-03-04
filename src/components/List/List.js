import React from 'react'
import Item from '../Item/Item.js';

function List() {
  
  const currentList = [
    {name: 'banana', quantity: 15 },
    {name:  'mango', quantity: 5},
    {name: 'chicken', quantity: 1},
  ]

  
  return (
    <div>
      {currentList.map(({name, quantity}) => 
      <Item name={name} quantity={quantity}/>
      )
      }
    </div>
  )
}

export default List