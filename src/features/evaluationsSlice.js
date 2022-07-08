import { 
  createSlice, 
  configureStore 
} from '@reduxjs/toolkit'


const evaluationsSlice = createSlice({
  name: 'evaluations',
  initialState: {
    online: [
      {
        "teacher": 0,
        "form": "12345",
        "answers": {
          "¿cómo te llamas?": "raul",
          "¿qué carrera cursas?": "ingeniería petroquímica",
          "¿ha faltado a clase sin justificar?": true
        }
      },
      {
        "teacher": 1,
        "form": "12345",
        "answers": {
          "¿cómo te llamas?": "yhox",
          "¿qué carrera cursas?": "ingeniería de sistemas"
        }
      },
      {
        "teacher": 2,
        "form": "12345",
        "answers": {
          "¿cómo te llamas?": "herna",
          "¿qué carrera cursas?": "ingeniería de sistemas"
        }
      }
    ],
    local: []
  },
  reducers: {
    addEvaluation: (state, action) => {
      console.log({ACTION: action})
      state.online.push(action.payload)
    }
  }
})

export const { addEvaluation } = evaluationsSlice.actions

export default evaluationsSlice.reducer
