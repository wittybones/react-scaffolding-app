//--------------------- THIS IS REDUX -------------------//

// INITIAL STATE
const initialState = {
  todos: []
}

// ACTIONS
const ADD_TODO = "ADD_TODO"
const TOGGLE_TODO = "TOGGLE_TODO"
let globalCounter = 1

const addTodo = (text) => ({
  type: ADD_TODO,
  payload: { text }
})

const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: { id }
})

// REDUCERS

const todoReducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            text: action.payload.text,
            id: globalCounter++,
            isDone: false
          }
        ]
      }

    case TOGGLE_TODO:
      // let index= state.todos.findIndex(todo=>todo.id==action.payload.id)
      // let todos = state.todos.slice()
      // todos[index]["isDone"] = !(todos[index]["isDone"])
      let todos = state.todos.map(todo =>
        todo.id === action.payload.id ? { ...todo, isDone: !(todo.isDone) } : todo)
      return {
        ...state,
        todos: todos
      }
    default: return state;
  }
}


// STORE
const store = Redux.createStore(todoReducer, initialState)

// LOGGING 
store.subscribe(() => console.log(store.getState()))

// DISPATCH YOUR ACTIONS BELOW
//
store.dispatch(addTodo("Todo Item 1"))
store.dispatch(addTodo("Todo Item 2"))
store.dispatch(addTodo("Todo Item 3"))
store.dispatch(toggleTodo(2))
// store.dispatch(toggleTodo("Todo Item 3"))