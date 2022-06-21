import { 
  createSlice, 
  configureStore 
} from '@reduxjs/toolkit'

export const formsSlice = createSlice({
  name: 'ines',
  initialState: {
    msg: 'nothing...',
    c: 0,
    forms: [
      {
        id: '12345',
        title: 'Eval. de Acompañamiento'
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
  },
  reducers: {
    change: state => {
      state.c += 1
      state.msg = `Hello world! #${state.c}`
    }
  }
})

