// Third party logic...
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

// Third party components...
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'

import Button from '@mui/material/Button'

// Own components...
import BaseLayout from '~/layout/Basic'

// Own logic...
import { joinResults } from '~/util'

function ResultsView(props) {
  const {id} = useParams()
  const form = useSelector( state => state.forms.find( f => f.id == id))
  console.log({FORM: form})

  const evaluations = useSelector( 
    state => state.evaluations.online
              .filter( e => e.form == form.id )
  )
  console.log({EVALUATIONS: evaluations})

  const teachers = useSelector( 
    state => state.teachers.local
  )
  console.log({TEACHERS: teachers})

  const results = joinResults({
    form, 
    evaluations, 
    teachers
  })
  console.log({RESULTS: results});  

  const [evaluatedTeachersPercent] = useState(50)
  const [notEvaluatedTeachersPercent] = useState(50)

  return (
    <BaseLayout title={form.title}>
      <Typography variant="h4">Porcentaje de Docentes evaluados</Typography>
      <Divider/>
      <Container>
        <Typography variant="body1">
          {evaluatedTeachersPercent}% profesores evaluados <br/>
          {notEvaluatedTeachersPercent}% profesores no evaluados
        </Typography>
        <Button>Ver profesores</Button>
      </Container>

      <Typography variant="h5">Respuestas</Typography>
      <Divider/>
      
    </BaseLayout>
  )
}

export default ResultsView

/*

{result?.items.map( (r, idx) => {
        let el
        switch(item.type) {
          case 'checkbox':{
            el = (
              <>
                <Typography variant="h6">{idx}. {r.label}</Typography>
                <Typography variant="body1">{r.yes}% indicó que sí</Typography>
                <Typography variant="body1">{r.not}% indicó que no</Typography>
                <Divider/>
              </> 
            )
          }
        }

        return el
      })}


*/