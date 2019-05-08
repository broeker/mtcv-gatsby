import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea'
import { CardContent } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  navigator: {
    minHeight: 200,
    marginTop: '1em',

  },
}));


function MadeWithLove() {

  const classes = useStyles();
  const [value] = React.useState('female');
  return (
    <Container  maxWidth="sm">
  <Box className={classes.navigator}>
    <CardActionArea>
      <Card>
        <CardContent>
    <Typography variant="h6">
      Have you or somebody you know been the victim of a crime?
    </Typography>
    <FormControl component="fieldset" className={classes.formControl}>
      <RadioGroup
        aria-label="Gender"
        name="gender1"
        className={classes.group}
        value={value}
      >
        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
        <FormControlLabel value="no" control={<Radio />} label="No" />
        <FormControlLabel value="notsure" control={<Radio />} label="I'm not sure" />
      </RadioGroup>
    </FormControl>
        </CardContent>
      </Card>
    </CardActionArea>
  </Box>
    </Container>
  );
}

export default function Navigator() {

  return (
    <>
      <MadeWithLove />
    </>
      );
}