// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function CardWithColoredShadow() {
  const cards = [
    { color: "info", title: "Info Card", desc: "Build something amazing with our UI kit." },
    { color: "success", title: "Success Card", desc: "This is a success card with colored shadow." },
    { color: "warning", title: "Warning Card", desc: "A warning card that stands out beautifully." },
  ];

  return (
    <MKBox component="section" py={6}>
      <Container>
        <Grid container spacing={3} justifyContent="center">
          {cards.map(({ color, title, desc }) => (
            <Grid item xs={12} md={6} lg={4} key={title}>
              <MKBox
                bgColor="white"
                borderRadius="xl"
                shadow="md"
                p={3}
                sx={{
                  boxShadow: ({ boxShadows: { colored } }) => colored[color],
                }}
              >
                <MKTypography variant="h5" color={color} mb={1}>
                  {title}
                </MKTypography>
                <MKTypography variant="body2" color="text">
                  {desc}
                </MKTypography>
              </MKBox>
            </Grid>
          ))}
        </Grid>
      </Container>
    </MKBox>
  );
}

export default CardWithColoredShadow;
