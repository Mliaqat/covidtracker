import React, { useEffect, useState } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Apifetch } from './Apifetch';
import { blue } from '@material-ui/core/colors';
import CountUp from 'react-countup';


const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 2,
      maxWidth: 1000,
      margin: '0 auto',
      marginTop: 100
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    title: {
      color: 'blue',
      textTransform: 'uppercase'

    },
    h:{
      textAlign: 'center'
    }
  }),
);

export default function Gridbox() {
  const classes = useStyles();
  const [dataa, getdataa] = useState({})
  useEffect(() => {
    async function getdata() {

      const data = await Apifetch()
      // console.log(data)
      // console.log(Object.keys(data))


      getdataa(data)
      console.log(data)

      return data
    }
    return getdata()

  }, [])


  return (
    <div className={classes.root}>
      <h1 className={classes.h}>Total Number covid19 Caese In the World</h1>
      <div className={classes.div}>
        <Grid container spacing={3}>
          {Object.keys(dataa).map((key, indx) => {
            return (
              <Grid item xs={12} sm={4} key={indx}>
                <Paper className={classes.paper}>
                  <h3 className={classes.title}>{key}</h3>
                  <CountUp
                    start={0}
                    end={[dataa[key].value]}
                    duration={2.75}
                  />
                  <p>Total Number Of {key} People</p>


                </Paper>
              </Grid>
            )



          })}


        </Grid>
      </div>

    </div>
  );


}

