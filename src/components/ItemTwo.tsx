import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToItemTwo } from '../redux/features/items/itemsSlice';


function ItemTwo() {

  const itemTwoTodos = useSelector((state: any) => state.items.itemTwoTodos)
  const dispatch = useDispatch()

  const [todo, setTodo] = useState <string> ()

  const handleSubmit = (e: any) => {
    
    e.preventDefault();
    if(todo !== "" || undefined || null) {
      dispatch(addToItemTwo(todo))
    }
  }

  console.log(itemTwoTodos);
  


  return (
    <div className='item-one-todos'>
      <h1>Item Two Todos</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />
        <button> Add todo </button>
      </form>
      <ul className='item-todos'>
        {
          itemTwoTodos.map((item: any)=> (
            <li key={item}>{item}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default ItemTwo