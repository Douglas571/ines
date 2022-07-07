import { 
  createSlice, 
  configureStore 
} from '@reduxjs/toolkit'

const formsSlice = createSlice({
  name: 'ines_forms',
  initialState: [
    {
      id: '12345',
      title: 'Eval. de Acompañamiento',
      author: {name: 'Douglas Socorro'},
      items: [
        { 
          label: '¿cómo te llamas?',
          type: 'text', 
          required: true
        },
        { 
          label: '¿qué carrera cursas?',
          type: 'select', 
          options: [
            'ingeniería de sistemas',
            'ingeniería petroquímica',
            'ingeniería en telecomunicaciones'
          ],
          default: 0,
          required: true
        },
        {
          label: '¿ha faltado a clase sin justificar?',
          type: 'checkbox'
        }
      ]
    },
    {
      id: '79807',
      title: 'Autoevaluación',
      author: {name: 'Yhoxin Rossell'},
    },
    {
      id: '34873',
      title: 'Eval. por Alumnado',
      author: {name: 'Hernan Guerrero'},

    }
  ]
  ,
  reducers: {
    addForm: (state, action) => {
      console.log({REDUX_NEW_FORM: action})
      action.payload.id = Date.now()
      state.push(action.payload)
    },
    updateForm: (state, action) => {
      console.log({REDUX_UPDATE_FORM: action})
      const form = action.payload
      const idx = state.findIndex(({id}) => id == form.id)
      state[idx] = form
    }
  }
})

export const { addForm, updateForm } = formsSlice.actions

export default formsSlice.reducer