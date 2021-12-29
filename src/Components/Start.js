import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDragon } from '@fortawesome/free-solid-svg-icons';
import { Container, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const styles = makeStyles({
   centerItems: {
      textAlign: 'center',
      padding: '5rem'
   },
   paddingXs: {
      padding: '1rem'
   }
});

export const StartPage = () => {
   const classes = styles();

   return (
      <Container className={classes.centerItems}>
         <FontAwesomeIcon size='3x' icon={faDragon}></FontAwesomeIcon>
         <Typography variant="h5" component="div" sx={{ flexGrow: 1 }} className={classes.paddingXs}>
            ¡Te damos la bienvenida!
         </Typography>
      </Container>
   );
};