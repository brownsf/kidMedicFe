import Link from "next/link";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    padding: theme.spacing(1)
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    width: "100%"
  }
}));

export default (props) => {
  const classes = useStyles();
  return (
    <Grid container justify="center" alignItems="center">
      <Grid item xs={8}>
        <Paper>
          <form className={classes.root} noValidate>
            <Grid container direction="row" justify="space-around">
              <Grid item sm={10}>
                <TextField
                  required
                  label="Child's Name"
                  id="childName"
                  className={classes.textField}
                />
              </Grid>
              <Grid item sm={12} md={5}>
                <TextField
                  variant="outlined"
                  label="Allergies"
                  id="allergies"
                  multiline
                  rows={8}
                  className={classes.textField}
                />
              </Grid>
              <Grid item sm={12} md={5}>
                <TextField
                  variant="outlined"
                  label="Other Medical Info"
                  id="medicalInfo"
                  className={classes.textField}
                  multiline
                  rows={8}
                />
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};
