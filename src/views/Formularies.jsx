import {useState} from 'react'

import AppBar from '@mui/material/AppBar'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'

import Button from '@mui/material/Button'
import Fab from '@mui/material/Fab'

import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'

import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'

import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

import AddIcon from '@mui/icons-material/Add'
import MenuIcon from '@mui/icons-material/Menu'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import EditIcon from '@mui/icons-material/Edit'

const Formularies = () => {
  const [anchorEl, setAnchorEl] = useState(null)

  const toggleMenu = (e) => {
    if (!anchorEl) 
      setAnchorEl(e.currentTarget)
    else
      setAnchorEl(null)
  }

  const goBack = () => {
    console.log('going back...')
  }

  const deleteFormulary = () => {
    console.log('Deleting a formulary...')
  }

  const addFormulary = () => {
    console.log('Adding a formulary...')
  }

  const fabStackStyle = {
    right: 16,
    bottom: 16,
    position: 'fixed'
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
              Formularios
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
                onClick={deleteFormulary}
              >Eliminar</MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
        <Container> 
          <List>
            <ListItem>
              <ListItemText primary="hello world"/>
            </ListItem>
          </List>
          <List>
            <ListItem>
              <ListItemText primary="hello world"/>
            </ListItem>
          </List>
          <Stack
            sx={fabStackStyle}
            spacing={2}
            alignItems="center"
          >
            <Fab
              size="small"
            ><EditIcon/></Fab>
            <Fab 
              color="primary" 
              aria-label="add"
              onClick={addFormulary}
            >
              <AddIcon />
            </Fab>
          </Stack>
        </Container>
      </>
    )
}

export default Formularies