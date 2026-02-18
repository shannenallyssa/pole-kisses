// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Images
import bgImage from "assets/images/examples/blog2.jpg";

function CardImageInside() {
  return (
    <MKBox component="section" py={6}>
      <Container>
        <Grid container spacing={3} justifyContent="center">
          {["Cozy Apartment", "Office Studio", "Mountain View"].map((title) => (
            <Grid item xs={12} md={6} lg={4} key={title}>
              <MKBox
                borderRadius="xl"
                overflow="hidden"
                shadow="md"
                sx={{ position: "relative" }}
              >
                <MKBox
                  component="img"
                  src={bgImage}
                  alt={title}
                  width="100%"
                  height="200px"
                  sx={{ objectFit: "cover" }}
                />
                <MKBox p={3} bgColor="white">
                  <MKTypography variant="h5" mb={1}>
                    {title}
                  </MKTypography>
                  <MKTypography variant="body2" color="text">
                    The place is close to Barceloneta Beach and bus stop just 2 min by walk.
                  </MKTypography>
                </MKBox>
              </MKBox>
            </Grid>
          ))}
        </Grid>
      </Container>
    </MKBox>
  );
}

export default CardImageInside;
