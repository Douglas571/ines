import { 
  createSlice, 
  configureStore 
} from '@reduxjs/toolkit'


const evaluationsSlice = createSlice({
  name: 'evaluations',
  initialState: {
    online: [],
    local: []
  },
  reducers: {
    addEvaluation: (state, action) => {
      console.log({ACTION: action})
      state.local.push(action.payload)
    }
  }
})

export const { addEvaluation } = evaluationsSlice.actions

export default evaluationsSlice.reducer
