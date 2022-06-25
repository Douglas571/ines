import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Login = () => {
  return (
      <Container maxWidth="sm">
        <Stack mt={2}>
          <Typography variant='h3' align="center">
            Ines
          </Typography>
        </Stack>

        <Container>
          <Stack 

            spacing={2}
            alignItems="center">
            <TextField 
              fullWidth
              id="outlined-basic" 
              label="Correo" 
              variant="outlined" 
              margin="normal"
              />
            <TextField
              fullWidth
              id="outlined-password-input"
              label="Contraseña"
              type="password"
              autoComplete="current-password"
              margin="normal"

            />

            <Button variant="contained">Iniciar Seción</Button>
            <Container>
              
            </Container>  
          </Stack>
        </Container>
      </Container>
    )
}
export default Login;

/*

<FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
*/