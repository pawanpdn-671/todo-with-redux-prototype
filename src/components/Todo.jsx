import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo } from '../redux/Action';

const TodoList = () => {

   const [value, setValue] = useState("");
   const list = useSelector((state) => state.todo.list);
   const dispatch = useDispatch();

   return (
      <div className='list-container'>
         <div className='input-field-block'>
            <h2 className='block-heading'>Add Your List </h2>
            <div className='add-items-block'>
               <input type="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder='Add a Todo' />

               <button type="submit" className='add-todo-btn' onClick={() => dispatch(addTodo(value), setValue(''))}>Add Todo</button>
            </div>
         </div>

         <div className='todo-list-items'>
            {
               list.map(elem => {
                  return(
                     <div key={elem.id} className='todo-item' >
                        <h4>{elem.value}</h4>
                        <i className='far fa-trash-alt delete-todo-btn' onClick={() => dispatch(deleteTodo(elem.id))}></i>
                     </div>
                  )
               })
            }
         </div>
      </div>
   )
}

export default TodoList;