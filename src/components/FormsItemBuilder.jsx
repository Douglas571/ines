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

export default function FormsItemBuilder(props){
  const {
    itemTypes, 
    itemTypeSelected, 
    changeItemType,
    onAddItem
  } = props 

  const [item, setItem] = useState({
    type: '',
    label: '',
    required: false,
    defualt: '',
    options: []
  })

  function addItem() {
    onAddItem(item)
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
          />
          <FormControl>
            <InputLabel id="lbl">Tipo</InputLabel>
            <Select
              id="lbl"
              label="Tipo"
              value={itemTypeSelected}
              onChange={changeItemType}
            >
              {itemTypes.map((i, idx) => (
                <MenuItem 
                  key={idx}   
                  value={i.type}
                >{i.label}</MenuItem>
                ))}
            </Select>
          </FormControl>
          <Button 
            variant="contained"
            onClick={addItem}>Agregar</Button>
          <Button>Limpiar</Button>  
        </Stack>
      </Container>
    </Paper>
  )
}
