import {Grid, Typography, makeStyles} from "@material-ui/core";

const useStyle = makeStyles({
  container: {
    padding: '10px'
  },
  details: {
    cursor: 'pointer'
  }
})

export function Details(props) {
  const {result} = props;
  const classes = useStyle();
  return (
    <Grid item xs={12} container direction='row' className={classes.container}>
      <Grid item xs={12} sm={12} md={6} lg={6}>
        <img width='100%' src="/assets/download.jpeg" alt='Cycle' />
      </Grid>
      <Grid  className={classes.details}>
        <Typography component='h2'>Description: </Typography>
        <Grid container direction='row'>
          <Typography>Name: </Typography>
          &emsp; <Typography>Marlin 5</Typography>
        </Grid>
        <Grid container direction='row'>
          <Typography>Price: </Typography>
          &emsp;<Typography>$370</Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}
