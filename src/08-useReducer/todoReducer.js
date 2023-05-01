
export const todoReducer = ( initialState, action ) => {

   switch (action.type) {
      case '[TODO] Add todo':
         return [...initialState, action.peyload]

      case '[TODO] Remove todo':
         return initialState.filter( todo => todo.id !== action.peyload )

      case '[TODO] Check todo':
         return initialState.map( todo => {
            if(todo.id === action.peyload){
               return {...todo, done: !todo.done}
            }else{
               return todo
            }
         } )
   
      default:
         return initialState
   }
}