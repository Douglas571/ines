import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import AppBar from '../components/AppBar.jsx'

const Home = () => {
  return (    
      <>
        <AppBar title="Ines"/>
        <Container>
          
          <Stack spacing={2} mt={2}>
            <Card>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe">
                    R
                  </Avatar>
                }
                title="Eventojhljhkjhkljhkjlhjhkljhklj"
                subheader="fecha"
              />
              <CardContent>
                <Typography variant="h6">
                  Hello world
                </Typography>
              </CardContent>
            </Card>
          </Stack>
        </Container>
      </>
    );
}

export default Home;