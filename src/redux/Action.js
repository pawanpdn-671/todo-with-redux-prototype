export const addTodo = (value) => {
   return {
      type: 'ADD_TODO', 
      payload: {
         id: new Date().getTime().toString(),
         value: value
      }
   }
}

export const deleteTodo = (id) => {
   return {
      type: 'DELETE_TODO',
      id
   }
}

export const loginTodo = (bool) => {
   return {
      type: 'LOGIN',
      payload: bool
   }
}