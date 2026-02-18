const inputDisabledCode = `// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";

function InputDisabled() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container item xs={12} lg={4} py={1} mx="auto" spacing={2}>
          <Grid item xs={12}>
            <MKInput variant="standard" label="Disabled Input" disabled fullWidth />
          </Grid>
          <Grid item xs={12}>
            <MKInput variant="outlined" label="Disabled Outlined" disabled fullWidth />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default InputDisabled;`;

export default inputDisabledCode;
