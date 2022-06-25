import { 
  createSlice, 
  configureStore 
} from '@reduxjs/toolkit'

import formsReducer from '~/features/forms/formsSlice.js'

// TO-DO: Finish the conection...

const store = configureStore({
  reducer: {
    forms: formsReducer
  }
})



//store.subscribe(() => console.log(store.getState()))

export default store