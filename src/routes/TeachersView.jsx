// Third party libraries...
import { useState } from 'react'
import { useParams, useNavigate, } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

// Third party components...
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Paper from '@mui/material/Paper'
import Divider from '@mui/material/Divider'

import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'

import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'


// Own components...
import ActionBar from '~/components/ActionBar'
//import SwipeableEdgeDrawer from '~/components/SwipeableEdgeDrawer'

function TeachersView(props) {
  const navigate = useNavigate()
  const {id} = useParams()

  const [pickForm, setPickForm] = useState(true)

  const teacher = useSelector(state => {
    console.log({STATE_FORMS: state.teachers.local})
    return state.teachers.local.find(t => t.id == id)
  })

  const forms = useSelector(state => state.forms )

  function beforeExit(){
    //for execute something before exit
  }

  const FormPiker = () => (
    <Dialog 
      onClose={() => setPickForm(false)}
      open={pickForm}
    >
      <DialogTitle>Selecciona un formulario</DialogTitle>
      <List>
        {forms.map( f => (
            <ListItem button 
              key={f.id} 
              onClick={() => evaluate(f.id)}
            >
              <ListItemText primary={f.title}/>
            </ListItem>
          ))}
      </List>
    </Dialog>
  )


  const evaluate = (formId) => {
    const queryString = new URLSearchParams()
    queryString.append('teacher', id)
    queryString.append('form', formId)

    setPickForm(false)
    navigate(`/evaluate?${queryString}`)
  }

  return (
    <>
      <ActionBar 
        title="Profesor"
        beforeExit={beforeExit}
      />
      <Box py={2} px={2}>
        <Paper elevation={3}>
          <Container>
            <Stack py={2} spacing={2}>
              <Typography variant="h5">{teacher.name + ' ' + teacher.lastname}</Typography>
              <Divider/>
              <Button 
                variant="contained"
                onClick={() => setPickForm(true)}>Evaluar</Button>
            </Stack>
          </Container>
        </Paper>
      </Box>

      <FormPiker/>

    </>
  )
}

export default TeachersView