const todoInitialState = {
   list : [],
}
const loginInitialState = {
   login: false
}

export const todoReducers = (state = todoInitialState, action) => {
   switch(action.type) {
      case 'ADD_TODO' : 
         const { id, value } = action.payload

         return {
            list: [
               ...state.list,
               {
                  id: id,
                  value: value
               }
            ]
         }
      
      case 'DELETE_TODO' : 
         const newList = state.list.filter(elem => elem.id != action.id)

         return { 
            ...state, 
            list: newList
         }  
      
      default: return state;
   }
}

export const loginReducers = (state = loginInitialState, action) => {
   switch(action.type) {
      case 'LOGIN' : 
         return {
            ...state, 
            login: action.payload
         }

      default: return state
   }
}