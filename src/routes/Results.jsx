import React from 'react';
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


// mui components...
import Container from '@mui/material/Container'

import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
//import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'

// own components...
import BasicLayout from '~/layout/Basic'


function Results(){
  const navigate = useNavigate()
  const evaluations = useSelector(state => state.evaluations.online)
  const forms = useSelector(state => state.forms)

  const openResults = (formId) => {
    navigate(`/results/${formId}`)
  }

  const listItemEvaluations = forms.map( f => (
    <ListItem 
      button 
      key={f.id}
      onClick={() => openResults(f.id)}
    >
        <ListItemText primary={f.title} secondary={'50% de profesores evaluados'}/>
    </ListItem>
    )
  )

  return (
    <BasicLayout title="Resultados">
      <List>
        {listItemEvaluations}
      </List>
    </BasicLayout>
  )
}

export default Results