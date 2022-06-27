import { useState } from 'react'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'

const OptimizedTextField = (props) => {
  const {initialValue, onUpdate} = props

  const [value, setValue] = useState(initialValue)

  function valueUpdate(evt){
    setValue(evt.target.value)
  }

  function handleUpdate(){
    onUpdate(value)
  }

  return (
      <TextField 
        fullWidth
        label={props.label}
        variant="outlined" 
        margin="normal"
        required={props.required}

        value={value}
        onChange={valueUpdate}
        onBlur={handleUpdate}
      />
    )
}

export default OptimizedTextField