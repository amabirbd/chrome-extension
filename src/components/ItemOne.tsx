import React, { useState } from 'react'


function ItemOne() {

  const [todo, setTodo] = useState <string> ()

  const handleSubmit = () => {
    // add todo to redux
    console.log("added " , todo);
    
  }



  return (
    <div className='item-one-todos'>
      <h1>Item One Todos</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />
        <button> Add todo </button>
      </form>
    </div>
  )
}

export default ItemOne 