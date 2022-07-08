import {useState} from 'react'

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
import Switch from '@mui/material/Switch';

import FormsItemBuilderOptions from './FormsItemBuilderOptions.jsx'

import { itemTypes } from '~/util.js'

const FormsItemBuilder = (props) => {
  const {
    onAddItem
  } = props 

  const [item, setItem] = useState({
    type: itemTypes[0].type,
    label: '',
    required: false,
    defualt: '',
    options: []
  })

  function updateLabel(evt){
    setItem({...item, label: evt.target.value})
  }

  function updateType(evt){
    console.log(evt.target.value)
    setItem({...item, type: evt.target.value})
  }

  function updateRequired(evt){
    console.log({REQUIRED: evt.target.checked, El: evt.target})
    setItem({...item, required: evt.target.checked})
  }


  function saveItem() {
    console.log({sended_item: item})
    onAddItem(item)
  }

  function updateOptions(options) {
    console.log(options)
    setItem({...item, options})
  }

  return (
      <Paper elevation={3}>
        <Container>
          <Stack py={2} spacing={2}>
            <Typography variant="h6">Nuevo Item</Typography>
            <TextField 
              fullWidth
              label="Pregunta"
              variant="outlined" 
              margin="normal"
              required
              onBlur={updateLabel}
            />
            <FormControl>
              <InputLabel id="lbl">Tipo</InputLabel>
              <Select
                id="lbl"
                label="Tipo"
                value={item.type}
                onChange={updateType}
              >
                {itemTypes.map((i, idx) => (
                  <MenuItem 
                    key={idx}   
                    value={i.type}
                  >{i.label}</MenuItem>
                  ))}
              </Select>
            </FormControl>
            <FormControlLabel 
              control={
                <Switch 
                  value={item.required}
                  onChange={updateRequired}
                />
              }
              label="Requerido" 
              labelPlacement="start"

              />

            {['select', 'checkbox'].includes(item.type)?
              <FormsItemBuilderOptions
                onChange={updateOptions}
              />
              :
              null
            }

            <Button 
              variant="contained"
              onClick={saveItem}>Agregar</Button>
          </Stack>
        </Container>
      </Paper>
    )
}

export default FormsItemBuilder
