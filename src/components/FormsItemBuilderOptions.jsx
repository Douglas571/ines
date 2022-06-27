import {useState, useRef, useEffect} from 'react'

import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

import FormGroup from '@mui/material/FormGroup';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';

import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Checkbox from '@mui/material/Checkbox';
import Switch from '@mui/material/Switch';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

const FormsItemBuilderOptions = (props) => {
  const { onChange } = props
  const [options, setOptions] = useState(['#1', '#1', '#1'])
  const [newOption, setNewOption] = useState('')

  const optionInput = useRef(null)

  function updateOption(evt){
    const text = evt.target.value
    setNewOption(text)
  }

  function addOption(){
    if(newOption){
      setOptions([...options, newOption])
      setNewOption('')  
    }
    
  }

  function editOption(edit_idx){
    setNewOption(options[edit_idx])
    deleteOption(edit_idx)
  }

  function deleteOption(delete_idx){
    setOptions(options.filter((i, idx) => idx !== delete_idx))
  }

  useEffect(() => {
      onChange(options)
  }, [options])

  return (
      <Stack spacing={2}>
        <List>
        {options.map((i, idx) => (
          <ListItem key={idx}
             secondaryAction={
              <div>
                <IconButton
                  onClick={() => deleteOption(idx)}>
                  -
                </IconButton>
                <IconButton
                  onClick={() => editOption(idx)}>
                  e
                </IconButton>
              </div>
             }>
             <ListItemText primary={i} />
          </ListItem>
          ))}
        </List>
        <Stack direction="row" spacing={2}>
          <TextField
            ref={optionInput}
            label="Opcion"
            variant="outlined" 
            margin="normal"
            value={newOption}
            onChange={updateOption}
          />
          <IconButton 
            variant="contained"
            onClick={addOption}>+</IconButton>
        </Stack>
      </Stack>
    )
}

export default FormsItemBuilderOptions