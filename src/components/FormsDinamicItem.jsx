import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const FormsDinamicItem = (props) => {
  const {item} = props
  let element

  switch(item.type){
    case 'text': {
      element = (
        <TextField 
          fullWidth
          label={item.label}
          variant="outlined" 
          margin="normal"
          required={item.required}
        />
      )
      break
    }
    case 'select': {
      const options = item.options.map((op, idx) => (
        <MenuItem 
          key={idx} 
          value={op}
        >{op}</MenuItem>
        ))

      element = (
        <FormControl 
          fullWidth 
          required={item.required}
        >
          <InputLabel id="lbl">{item.label}</InputLabel>
          <Select
            id="lbl"
            label={item.label}
          >
            {options}
          </Select>
        </FormControl>)
      break
    }
    case 'checkbox': {
      let checkboxes

      if(item.options?.length > 0) {
        checkboxes = item.options.map((op, idx) => {
          return (<FormControlLabel 
              key={idx} 
              control={<Checkbox/>} 
              label={op}
              labelPlacement="end"/>)
        })

        element = (
          <FormGroup >
            <InputLabel id="lbl">{item.label}</InputLabel>
            {checkboxes}
          </FormGroup>
        )

      } else {
        element = (
          <FormGroup >
            <FormControlLabel 
              control={<Checkbox/>} 
              label={item.label}
              labelPlacement="end"/>
          </FormGroup>
        )
      }
      break
    }
    default:
      element = (<Typography>Unknow item type</Typography>)
      break
  }

  return (<>{element}</>)
}

export default FormsDinamicItem