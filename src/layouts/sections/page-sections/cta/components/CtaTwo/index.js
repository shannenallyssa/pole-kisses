// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

function CtaTwo() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={8}
          flexDirection="column"
          justifyContent="center"
          mx="auto"
          textAlign="center"
        >
          <MKTypography variant="h2" mb={1}>
            Do you love this awesome UI Kit?
          </MKTypography>
          <MKTypography variant="body1" color="text" mb={4}>
            If you love this design system, join us and let the world know!
          </MKTypography>
          <MKBox display="flex" justifyContent="center" gap={2}>
            <MKButton variant="gradient" color="info">
              Get Started
            </MKButton>
            <MKButton variant="outlined" color="info">
              Learn More
            </MKButton>
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default CtaTwo;
