const ActionBar = () => {
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
    </>

    )
}