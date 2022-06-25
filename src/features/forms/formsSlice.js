import { 
  createSlice, 
  configureStore 
} from '@reduxjs/toolkit'

const formsSlice = createSlice({
  name: 'ines',
  initialState: [
    {
      id: '12345',
      title: 'Eval. de Acompañamiento',
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
      title: 'Autoevaluación'
    },
    {
      id: '34873',
      title: 'Eval. por Alumnado'
    }
  ]
  ,
  reducers: {
    addForm: (state, payload) => {
      state.push(payload)
    },

    change: state => {
      state.c += 1
      state.msg = `Hello world! #${state.c}`
    }
  }
})

export const { change } = formsSlice.actions

export default formsSlice.reducer