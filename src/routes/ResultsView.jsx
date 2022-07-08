// Third party logic...
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

// Third party components...
import Stack from '@mui/material/Stack'
import Container from '@mui/material/Container'

import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'

import Button from '@mui/material/Button'

// Own components...
import BaseLayout from '~/layout/Basic'

// Own logic...
import { joinResults } from '~/util'


ChartJS.register(ArcElement, Tooltip, Legend);

const colors = [
  'rgba(255, 99, 132, 1)',
  'rgba(54, 162, 235, 1)',
  'rgba(255, 206, 86, 1)',
  'rgba(75, 192, 192, 1)',
  'rgba(153, 102, 255, 1)',
  'rgba(255, 159, 64, 1)',
]

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

  const [tep] = useState(results.teachersEvaluatedPercent)
  const [tNep] = useState(100 - tep)

  const selectResults = results
    .filter( res => res.item.type == 'select')
    .map(res => {

      const selectData = {}
      selectData.labels = res.choices.map( chs => chs.option)


      const datasets = {
        label: res.item.label,
        data: res.choices.map(chs => chs.percent),
        backgroundColor: res.choices.map((_, idx) => colors[idx]),
      }

      selectData.datasets = [datasets]
      console.log({SELECT_DATA: selectData})

      const el = (
        <Container>
          <Typography variant="h6">{res.item.label}</Typography>
          <Doughnut data={selectData}/>
          { res.choices.map( (chs, idx) => {
            return (
              <Typography 
                variant="body1"
                key={idx}
              >{chs.percent}% {chs.option}</Typography>)
          }) }
        </Container>
      )

      return el
    })
  
  const checkboxResults = results
    .filter( res => res.item.type == 'checkbox')
    .map( (res, idx) => {
      const yesPercent = res.choices.yes.percent
      const noPercent = res.choices.no.percent

      const checkboxData = {
        labels: ['Sí', 'No'],
        datasets: [{
          label: res.item.label,
          data: [yesPercent, noPercent],
          backgroundColor: [colors[0], colors[1]],
        }]
      }

      console.log({CHECBOX_DATA: checkboxData})

      const el = (
        <Container>
          <Typography variant="h6">{res.item.label}</Typography>
          <Doughnut data={checkboxData}/>
          <Typography 
            variant="body1"
            key={idx}
          >
            {res.choices.yes.percent}% Sí <br/>
            {res.choices.no.percent}% No
          </Typography>
        </Container>
      )

      return el
    })

  const textResults = results
    .filter( res => res.item.type == 'text')
    .map( res => {
      const elements = (
        <Container>
          <Typography variant="h6">{res.item.label}</Typography>
          <Divider/>
          {res.answers.map( a => (
            <>
              <Typography>{a.teacher.name}: {a.what}</Typography>
            </>
          ))}
        </Container>
      )

      return elements
    })

  const resultsElements = [
    ...selectResults,
    ...checkboxResults,
    ...textResults
  ]

  const data = {
    labels: ['evaluados', 'no evaluados'],
    datasets: [
      {
        label: '% de docentes evaluados',
        data: [tep, tNep],
        backgroundColor: [
          colors[0],
          colors[1],
        ],
      }
    ]
  }

  return (
    <BaseLayout title="Resultado">
      <Typography variant="h4">{form.title}</Typography>
      <Divider/>
      <Container>
        <Doughnut data={data} />
        <Typography variant="body1">
          {tep}% profesores evaluados <br/>
          {tNep}% profesores no evaluados
        </Typography>
        <Button>Ver profesores</Button>
      </Container>

      <Typography variant="h5">Respuestas</Typography>
      <Divider/>
      <Stack spacing={3} py={2}>
        {resultsElements}
      </Stack>
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