import { Typography, Grid } from "@mui/material";

function PageHeader() {
  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item>
        <Typography variant="h5" component="h5" gutterBottom>
          Cron Logs
        </Typography>
      </Grid>
    </Grid>
  );
}

export default PageHeader;
