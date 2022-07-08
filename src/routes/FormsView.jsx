// third party logic...
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

// Own logic...

// third party components...
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'

import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'

import Divider from '@mui/material/Divider'


// Own components...
import ActionBar from '../components/ActionBar.jsx'
import FormsDinamicItem from '~/components/FormsDinamicItem.jsx'

function FormsView() {
  const { id } = useParams()

  const form = useSelector(state => {
    console.log({STATE_FORMS: state.forms})
    return state.forms.find(f => f.id == id)
  })
  const dispatch = useDispatch()

  const goBack = () => {
    console.log('going back...')
  }

  console.log({VIEW_FORM_ID: id})
  console.log({VIEW_FORM: form})

  let items = (<Typography>Formulario vacio</Typography>)
  if (form.items) {
    items = form.items.map( (i, idx) => {
      return (<FormsDinamicItem item={i} key={idx}/>)
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
                <Divider/>
                {items}
              </Stack>
            </Container>
          </Paper>
        </Box>
      </>
    )
}

export default FormsView