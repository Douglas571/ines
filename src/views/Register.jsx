import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Register = () => {
  return (
      <Container>
        <Stack my={2}>
          <Typography variant='h3' align="center">
            Registro
          </Typography>
        </Stack>
        <Stack component="form" spacing={2} alignItems="center">
          <TextField
            fullWidth
            variant="outlined"
            label="correo"
          />
          <TextField
            fullWidth
            variant="outlined"
            label="Contraseña"
            type="password"
          />
          <TextField
            fullWidth
            variant="outlined"
            label="Confirmar Contraseña"
            type="password"
          />
          <Container align="center">
            <Button variant="contained">Registrarce</Button>
            <Button>¿Ya estas registrado?</Button>
          </Container>
        </Stack>
      </Container>    
    );
}

export default Register;