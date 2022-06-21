import Container from '@mui/material/Container'

import ActionBar from '../components/ActionBar.jsx'

import {
  useNavigate,
  useParams
} from 'react-router-dom'

const FormsEdit = () => {
  const {id} = useParams()
  const navigate = useNavigate()

  const beforeExit = () => {
    console.log('SALIENDO!!')
    console.log('recuerda guardar las cosas antes de salir... :(')
  }

  return (
    <>
      <ActionBar 
        title="Editar Formulario"
        beforeExit={beforeExit}
      />
      <Container>
        The code of form is: {id}
      </Container>
    </>
    )
}

export default FormsEdit