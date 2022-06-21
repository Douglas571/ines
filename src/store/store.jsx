import { 
  createSlice, 
  configureStore 
} from '@reduxjs/toolkit'

// TO-DO: Finish the conection...

console.log(inesSlice.actions)

const store = configureStore({
  reducer: inesSlice.reducer
})

store.subscribe(() => console.log(store.getState()))

store.dispatch(change())
store.dispatch(change())
store.dispatch(change())

export default store