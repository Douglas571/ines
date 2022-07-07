import { useState, useRef, useReducer, useEffect } from 'react'
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

import Snackbar from '@mui/material/Snackbar'


// Own components...
import ActionBar from '../components/ActionBar.jsx'
import FormsItemBuilder from '~/components/FormsItemBuilder.jsx'
import OptimizedTextField from '~/components/OptimizedTextField.jsx'


import FormsDinamicItem from '~/components/FormsDinamicItem.jsx'

// Own logic...
import { updateForm } from '~/features/formsSlice.js'
import { itemTypes } from '~/util.js'

import {
  useNavigate,
  useParams
} from 'react-router-dom'

const FormsEdit = () => {
  const titleInput = useRef()
  const {id} = useParams()
  const navigate = useNavigate()

  const [isSaving, setIsSaving] = useState(false)

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

      case 'new:item':
        if(state.items){
          const new_items = [...state.items, action.payload]
          console.log({new_items})
          return {...state, items: new_items}  
        }
        return {...state, items: [action.payload]}
        

      default:
        return state
        break
    }
  }

  const [form, dispatch] = useReducer(reducer, initialState)
  console.log({THE_FORM_IS: form})

  function changeTitle(title){
    console.log(title)
    dispatch({ type: 'new:title', payload: title})
  }

  const beforeExit = () => {
    console.log('SALIENDO!!')
    console.log('recuerda guardar las cosas antes de salir... :(')
  }

  const addItem = (newItem) => {
    dispatch({
      type:'new:item', 
      payload: newItem
    })

  }

  function saveChanges(){
    console.log('[!] saving changes')
    storeDispatch(updateForm(form))
    setIsSaving(true)
  }


  let items
  if (form.items) {
    items = form.items.map((i, idx) => {
      console.log({ITEM: i})
      return (<FormsDinamicItem item={i} key={idx}/>)
    })
  }

  function closeSnackbar() {
    setIsSaving(false)
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
              <Stack py={2} spacing={2}>
                <OptimizedTextField
                  label="Titulo"
                  required
                  initialValue={form.title}
                  onUpdate={changeTitle}
                />
                <Stack spacing={1}>
                  <Typography variant="h6">Items</Typography>
                  {items}
                </Stack>
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
         <Snackbar
          open={isSaving}
          onClose={closeSnackbar}
          autoHideDuration={6000}
          message="Guardando cambios..."
          action={
            <Button size="small">
              Undo
            </Button>
          }
        />
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