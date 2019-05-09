import React from 'react';
import Typography from '@material-ui/core/Typography';
import Layout from '../components/Layout/Layout'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea'
import ResourceHome from '../components/ResourceHome/ResourceHome';
import Navigator from '../components/Navigator/Navigator';
import { CardContent } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

import Link from '../components/Link';

const useStyles = makeStyles(theme => ({
  header: {
    backgroundColor: 'Gainsboro',
  },
  navigator: {
    backgroundColor: 'Cornsilk',
    marginBottom: '1em',

  },
  factoid: {
    backgroundColor: 'WhiteSmoke',

  },
  link: {
    '&:hover': {
      color: 'white',
      opacity: '1',
    }
  },
  wrapper: {
    marginBottom: '1em',
  },
  title: {
    color: 'pink',
  },
  subheader: {
    color: 'black',
  },
  about: {
    padding: '2em',
    width: '60%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  photo: {
    width: 300,
    height: 300,
    backgroundColor: "pink",
    display: 'block',
  }
}));

export default function Help() {
  const classes = useStyles();
  return (
    <Layout>

      <Navigator />





    </Layout>
  );
}