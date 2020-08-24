import Link from "next/link";
import {Grid, Typography, makeStyles} from "@material-ui/core";

const useStyle = makeStyles({
  container: {
    padding: '10px'
  },
  details: {
    cursor: 'pointer'
  },
  title: {
    textTransform: 'uppercase'
  }
})

export function Card(props) {
  const {response} = props;
  const classes = useStyle();
  console.log(response);
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} container className={classes.container} justify="center">
      <Grid container justify='center'>
        <Link href="/details">
          <img width='50%' src={response.image} alt={response.title} />
        </Link>
      </Grid>
      <Grid container justify='center' className={classes.details}>
        <Typography className={classes.title}>{response.category}</Typography>
      </Grid>
    </Grid>
  )
}
