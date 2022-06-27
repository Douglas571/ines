import { useState, createRef, useReducer } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

import FormGroup from '@mui/material/FormGroup';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';

import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Checkbox from '@mui/material/Checkbox';

import ActionBar from '../components/ActionBar.jsx'
import FormsItemBuilder from '~/components/FormsItemBuilder.jsx'

// Own logic...
import { updateForm } from '~/features/forms/formsSlice.js'

import {
  useNavigate,
  useParams
} from 'react-router-dom'

const itemTypes = [
    { type: "textField", label: "Texto Corto" },
    { type: "select", label: "Selección" }
  ]

const FormsEdit = () => {
  const {id} = useParams()
  const navigate = useNavigate()

  const originalForm = useSelector(state => {
    console.log({STATE_FORMS: state.forms})
    return state.forms.find(f => f.id == id)
  })
  const storeDispatch = useDispatch()

  const initialState = {...originalForm}

  function reducer(state, action) {
    console.log('[!] reducer:', JSON.stringify(action))
    switch(action.type){
      case 'new:title':
        console.log({THE_STATE_TITLE_IS: state})
        return {...state, title: action.payload}

      default:
        return state
        break
    }
  }

  const [form, dispatch] = useReducer(reducer, initialState)
  console.log({THE_FORM_IS: form})

  function changeTitle(evt){
    console.log(form.title)
    dispatch({ type: 'new:title', payload: evt.target.value})
  }

  const beforeExit = () => {
    console.log('SALIENDO!!')
    console.log('recuerda guardar las cosas antes de salir... :(')
  }

  const addItem = (newItem) => {


  }

  function saveChanges(){
    console.log('[!] saving changes')
    storeDispatch(updateForm(form))
  }

  return (
    <>
      <ActionBar 
        title="Editar Formulario"
        beforeExit={beforeExit}
      />
      <Box my={2} mx={2}>
        <Stack spacing={2} py={2}>
          <Paper elevation={3}>
            <Container>
              <Stack py={2}>
                <TextField 
                  fullWidth
                  label="Titulo"
                  variant="outlined" 
                  margin="normal"
                  
                  onBlur={changeTitle}
                  required
                />
                <Typography variant="h6">Items</Typography>
                <Button 
                  variant="contained"
                  onClick={saveChanges}
                >Guardar Cambios</Button>
              </Stack>
            </Container>
          </Paper>

          <FormsItemBuilder 
            onAddItem={addItem}
          />
          
        </Stack>
      </Box>
    </>
    )
}

export default FormsEdit

/*
<Container>
  <Stack>
    

  </Stack>
</Container>
*/