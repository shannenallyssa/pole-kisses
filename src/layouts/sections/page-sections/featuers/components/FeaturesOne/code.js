const featuresOneCode = `// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 PRO React examples
import SimpleInfoCard from "examples/Cards/InfoCards/SimpleInfoCard";

function FeaturesOne() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          justifyContent="center"
          mx="auto"
          textAlign="center"
          pb={6}
        >
          <MKTypography variant="h2" mb={1}>
            Our Features
          </MKTypography>
          <MKTypography variant="body1" color="text">
            We get insulted by others, lose trust for those others. We get back here to follow my
            dreams
          </MKTypography>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={4}>
            <SimpleInfoCard
              color="info"
              icon="flag"
              title="Expertly Made"
              description="Larger, yet dramatically thinner. More powerful, but remarkably power efficient."
              direction="center"
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <SimpleInfoCard
              icon="precision_manufacturing"
              title="Crafted with Care"
              description="We get insulted by others, lose trust for those others. We get back here to follow my dreams"
              direction="center"
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <SimpleInfoCard
              color="warning"
              icon="receipt_long"
              title="Great Value"
              description="The time is now to be okay to be the greatest you. Would you believe in what you believe in?"
              direction="center"
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default FeaturesOne;`;

export default featuresOneCode;
