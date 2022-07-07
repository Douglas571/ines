// third party libs
import { useSelector, useDispatch } from 'react-redux'
import {
  useNavigate,
} from "react-router-dom";

// mui components...
import Container from '@mui/material/Container'

import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'

import IconButton from '@mui/material/IconButton'

import EditIcon from '@mui/icons-material/Edit'

// own components...
import AppBar from '~/components/AppBar.jsx'

function TeacherListItem(props){
  const {
    teacher, 
    onEdit,
    onOpen,

  } = props

  return (
    <ListItem
      disablePadding
      secondaryAction={
        <IconButton 
          edge="end"
          onClick={() => onEdit(teacher.id)}
        >
          <EditIcon/>
        </IconButton>
      }>
      <ListItemButton
        onClick={ () => onOpen(teacher.id) }>
        <ListItemText 
          primary={teacher.name + ' ' + teacher.lastname} 
          secondary={`puesto`}/>
      </ListItemButton>
    </ListItem>
  )
}

function Teachers() {
  const teachers = useSelector( state => state.teachers.local )
  const navigate = useNavigate()

  function editTeacher(id){
    console.log(`[!] Editing teacher ${id}`)
  }

  function openTeacher(id){
    console.log(`[!] Opening teacher ${id}`) 
    navigate(`${id}`)
  }

  return (
    <>
      <AppBar title="Profesores"/>
      <Container>

        <List dense>
          {teachers.map(t => ( 
              <TeacherListItem 
                key={t.id}
                teacher={t}
                onEdit={editTeacher}
                onOpen={openTeacher}
              />
            )
          )}          
        </List>

      </Container>
    </>
  )
}

export default Teachers