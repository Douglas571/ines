// third party logic...
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

// Own logic...
import { change } from '~/features/forms/formsSlice.js'

// third party components...
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

// Own components...
import ActionBar from '../components/ActionBar.jsx'



function FormsView() {
  const { id } = useParams()

  const form = useSelector(state => {
    return state.forms.find(f => f.id === id)
  })
  const dispatch = useDispatch()

  const goBack = () => {
    console.log('going back...')
  }

  console.log(form)

  let items = (<Typography>Formulario vacio</Typography>)
  if (form.items) {
    items = form.items.map( (i, idx) => {
      let item 

      switch(i.type){
        case 'text':
          item = (
            <TextField 
              fullWidth
              key={idx}
              label={i.label}
              variant="outlined" 
              margin="normal"
              required={i.required}
            />)
          break
        case 'select':
          const options = i.options.map((op, idx) => (
            <MenuItem 
              key={idx} 
              value={op}
            >{op}</MenuItem>
            ))

          console.log(options)

          item = (
            <FormControl 
              key={idx}
              fullWidth 
              required={i.required}
            >
              <InputLabel id="lbl">{i.label}</InputLabel>
              <Select
                id="lbl"
                label={i.label}
              >
                {options}
              </Select>
            </FormControl>)
          break

        case 'checkbox':
          item = (
            <FormGroup 
              key={idx}
              aria-label="position" 
              row>
              <FormControlLabel 
                control={<Checkbox/>} 
                label={i.label}
                labelPlacement="start"/>
            </FormGroup>
            )
          break

        default:
          item = (<Typography key={idx}>Unknow item type</Typography>)
          break
      }

      return item
    })
  }

  return (
      <>
        <ActionBar title="Vista del Formulario"/>
        <Box py={2} px={2}>
          <Paper elevation={3}>
            <Container>
              <Stack py={2} spacing={2}>
                <Typography variant="h5">{form.title}</Typography>
                {items}
                <Button variant="contained">Evaluar</Button>
              </Stack>
            </Container>
          </Paper>
        </Box>
      </>
    )
}

export default FormsView