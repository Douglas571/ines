import { 
  createSlice, 
  configureStore 
} from '@reduxjs/toolkit'

import formsReducer from '~/features/formsSlice.js'
import teachersReducer from '~/features/teachersSlice.js'
import evaluationsReducer from '~/features/evaluationsSlice.js'

// TO-DO: Finish the conection...

const store = configureStore({
  reducer: {
    forms: formsReducer,
    teachers: teachersReducer,
    evaluations: evaluationsReducer,
  }
})



//store.subscribe(() => console.log(store.getState()))

export default store