import { useParams } from 'react-router-dom'

import Container from '@mui/material/Container'

import ActionBar from '../components/ActionBar.jsx'

function FormsView() {
  const { id } = useParams()
  console.log(`the params are: ${JSON.stringify(id)}`)

  const goBack = () => {
    console.log('going back...')
  }

  return (
      <>
        <ActionBar title="Vista del Formulario"/>
        <Container>
          
        </Container>
      </>
    )
}

export default FormsView