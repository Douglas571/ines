import { useState, createRef, useReducer } from 'react'

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

import {
  useNavigate,
  useParams
} from 'react-router-dom'

export default function FormsCreate(){
  const initialState = {
    title: '',
    items: []
  }

  function reducer(state, action) {
    console.log('[!] reducer:', JSON.stringify(action))
    switch(action.type){
      case 'title':
        return {...state, title: action.payload}

      case 'new:item':
        const new_items = [...state.items, action.payload]
        console.log({new_items})
        return {...state, items: new_items}

      default:
        break
    }
  }

  const [form, dispatch] = useReducer(reducer, initialState)

  const {id} = useParams()
  const navigate = useNavigate()
  const titleInput = createRef(null)

  const [newForm, setNewForm] = useState({
    title: '',
    items: []
  })

  const itemTypes = [
    { type: "textField", label: "Texto Corto" },
    { type: "select", label: "Selección" }
  ]
  const [itemTypeSelected, setItemTypeSelected] = useState(itemTypes[0].type)

  function changeItemType(evt){
    console.log(evt.target.value)
    setItemTypeSelected(evt.target.value)
  }

  function changeTitle(evt){
    console.log(form.title)
    console.log('aquí')
    dispatch({type: 'title', payload:evt.target.value})
    
  }

  const beforeExit = () => {
    console.log('SALIENDO!!')
    console.log('recuerda guardar las cosas antes de salir... :(')
  }

  function addItem(item){
    dispatch({
      type:'new:item', 
      payload: item
    })

    console.log({form})
  }

  const items = form.items.map((i, idx) => {
    console.log({item: i})
    return (
      <Typography key={idx}>{i.label}</Typography>
    )
  })

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
              </Stack>
            </Container>
          </Paper>

          <FormsItemBuilder 
            itemTypes={itemTypes}
            itemTypeSelected={itemTypeSelected}
            changeItemType={changeItemType}
            onAddItem={addItem}
          />
          
        </Stack>
      </Box>
    </>
    )
}

/*
<Container>
  <Stack>
    

  </Stack>
</Container>
*/