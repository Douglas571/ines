import { 
  createSlice, 
  configureStore 
} from '@reduxjs/toolkit'

const teachersSlice = createSlice({
  name: 'teachers',
  initialState: {
    local: [
      {
        id: 0,
        name: 'douglas',
        lastname: 'socorro'
      },
      {
        id: 1,
        name: 'yhoxin',
        lastname: 'rossell'
      },
      {
        id: 2,
        name: 'hernán',
        lastname: 'guerrero'
      }
    ]
  },
  reducers: {
    addTeacher: (state, action) => {
      action.payload.id = Date.now()
      state.teachers.push(action.payload)
    },
  }
})

export const { addTeacher } = teachersSlice.actions

export default teachersSlice.reducer