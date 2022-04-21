import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToItemOne } from '../redux/features/items/itemsSlice';


function ItemThree() {

  const itemThreeTodos = useSelector((state: any) => state.items.itemThreeTodos)
  const dispatch = useDispatch()

  const [todo, setTodo] = useState <string> ()

  const handleSubmit = (e: any) => {
    
    e.preventDefault();
    if(todo !== "" || undefined || null) {
      dispatch(addToItemOne(todo))
    }
  }

  console.log(itemThreeTodos);
  


  return (
    <div className='item-one-todos'>
      <h1>Item Three Todos</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />
        <button> Add todo </button>
      </form>
      <ul className='item-todos'>
        {
          itemThreeTodos.map((item: any)=> (
            <li key={item}>{item}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default ItemThree