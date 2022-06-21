import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'

import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import MoreVertIcon from '@mui/icons-material/MoreVert'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const ActionBar = params => {
  const {title} = params
  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = useState(null)
  
  const toggleMenu = (e) => {
    if (!anchorEl) 
      setAnchorEl(e.currentTarget)
    else
      setAnchorEl(null)
  }

  const goBack = () => {
    if (params.beforeExit) {
      params.beforeExit()
    }
    console.log('going back...')
    navigate(-1)
  }

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={goBack}
          >
            <ArrowBackIcon/>
          </IconButton>  
          <Typography 
            variant="h6" 
            component="div" 
            sx={{ flexGrow: 1 }}
          >
            {title}
          </Typography>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="more"
            onClick={toggleMenu}
          >
            <MoreVertIcon/>
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={toggleMenu}
          >
            <MenuItem>sos un falso</MenuItem>
            <MenuItem>Yhoxin</MenuItem>
            <MenuItem
              onClick={null}
            >Eliminar</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </>

    )
}

export default ActionBar