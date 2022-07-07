import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

// Third party components...
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Paper from '@mui/material/Paper'

import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

// Own components...
import ActionBar from '~/components/ActionBar'
import FormsDinamicItem from '~/components/FormsDinamicItem'
import BasicLayout from '~/layout/Basic'

// Own logic...
import { addEvaluation } from '~/features/evaluationsSlice'
import { getAnswerObject } from '~/util'

function Evaluating() {
  const [search] = useSearchParams()
  const dispatch = useDispatch()

  const teacher = useSelector( state => {
    const id = search.get('teacher')
    return state.teachers.local.find(t => t.id == id)
  })

  const form = useSelector( state => {
    const id = search.get('form')
    return state.forms.find( f => f.id == id)
  })

  const evaluations = useSelector( st => st.evaluations.local )

  const [answers, setAnswers] = useState(getAnswerObject(form.items))

  function handleSave() {
    console.log('[!] Guardando formulario...')
    console.log({ANSWERS: answers})

    const evaluation = {
      teacher: teacher.id,
      form: form.id,
      answers
    }
    
    dispatch(addEvaluation(evaluation))
  }

  function update(label, value){
    console.log({LABEL: label, VALUE: value})
    
    const newState = {...answers}
    newState[label] = value
    
    setAnswers(newState)
  }

  return (
    <BasicLayout
      title="Evaluando"
    >
      <Stack>
        <Paper elevation={3}>
          <Stack py={2} px={2}>
            
            {teacher ? <Typography>the teacher is: {teacher.name}</Typography> : null}
            {form ? <Typography>the form is: {form.title}</Typography> : null}

            {form.items?.map( (item, idx) => (
                <FormsDinamicItem 
                  key={idx} 
                  item={item}
                  onUpdate={(value) => update(item.label, value)}
                />
              )
            )}

            <Button onClick={() => handleSave()}>Guardar</Button>

          </Stack>
        </Paper>
      </Stack>
    </BasicLayout>
  )
}

export default Evaluating