// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Images
import bgImage from "assets/images/examples/blog2.jpg";

function CardRotate() {
  const cards = ["Cozy Apartment", "Office Studio", "Mountain Cabin"];

  return (
    <MKBox component="section" py={6}>
      <Container>
        <Grid container spacing={3} justifyContent="center">
          {cards.map((title) => (
            <Grid item xs={12} md={6} lg={4} key={title}>
              <MKBox
                sx={{
                  "&:hover": { transform: "rotate(-4deg)", transition: "transform 0.3s ease" },
                  transition: "transform 0.3s ease",
                }}
              >
                <MKBox borderRadius="xl" overflow="hidden" shadow="md">
                  <MKBox
                    component="img"
                    src={bgImage}
                    alt={title}
                    width="100%"
                    height="180px"
                    sx={{ objectFit: "cover" }}
                  />
                  <MKBox p={3} bgColor="white">
                    <MKTypography variant="h5" mb={1}>
                      {title}
                    </MKTypography>
                    <MKTypography variant="body2" color="text">
                      Hover to see the rotate effect on this card.
                    </MKTypography>
                  </MKBox>
                </MKBox>
              </MKBox>
            </Grid>
          ))}
        </Grid>
      </Container>
    </MKBox>
  );
}

export default CardRotate;
