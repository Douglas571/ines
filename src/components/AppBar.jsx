import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

import {
  useNavigate,
  useLocation
} from 'react-router-dom'

import {
  Avatar,

  List,
  ListItem,
  ListItemButton,
  ListItemText,

  Drawer
} from '@mui/material';

import Divider from '@mui/material/Divider';
import ListItemAvatar from '@mui/material/ListItemAvatar';

export default function MenuAppBar(props) {
  const {
    title,
    moreActions,
  } = props

  const navigate = useNavigate()
  const location = useLocation()
  const [auth, setAuth] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const [showMenu, setShowMenu] = React.useState(false);

  const links = [
    {
      name: 'Inicio',
      route: '/'

    },
    {
      name: 'Formularios',
      route: 'formularies'
    },
    {
      name: 'Profesores',
      route: 'teachers'
    },
    {
      name: 'Resultados',
      route: 'results'
    },
    
  ]

  function goTo(route) {
    console.log('navigating to route: ', route)
    const mainSectionUrl = window.location.pathname.split('/')[1]
    console.log({ACTUAL_URL: mainSectionUrl,
                  NEXT_ROUTE: route})

    if (route === '/') 
      navigate('/') 
    else
      navigate(`/${route}`) 
  }

  function toggleMenu(evt) {
    setShowMenu(!showMenu);
  }

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}

            onClick={toggleMenu}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" >
            {title}
          </Typography>
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        anchor={"left"}
        open={showMenu}
        onClose={toggleMenu}
      >
        <Box>
          

          <List>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar>
                  D
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Douglas Socorro" secondary="Administrador"/>
            </ListItem>
            <Divider/>
            {links.map((l, i) => (
              <ListItem disablePadding
                key={i}
                onClick={() => goTo(l.route)}
              >
                <ListItemButton>
                  <ListItemText primary={l.name}/>  
                </ListItemButton>
              </ListItem>)
            )

            }
          </List>
        </Box>     
      </Drawer>
      
    </Box>
  );
}
