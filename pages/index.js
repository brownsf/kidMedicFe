import Link from "next/link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    height: "100vh"
  },
  box: {
    padding: "10px"
  }
});
export default function IndexPage() {
  const classes = useStyles();
  return (
    <Grid
      container
      className={classes.container}
      direction="row"
      justify="center"
      alignItems="center"
    >
      <Grid item xs={8}>
        <Paper>
          <Box className={classes.box}>
            <Typography>
              Hello World.{" "}
              <Link href="/about">
                <a>About</a>
              </Link>
            </Typography>
            <Typography>
              <a href="/api/auth/login">Login</a>
            </Typography>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
}
