// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function StatsThree() {
  const stats = [
    { count: "1M+", label: "Users" },
    { count: "50K+", label: "Projects" },
    { count: "99%", label: "Satisfaction" },
    { count: "24/7", label: "Support" },
  ];

  return (
    <MKBox component="section" py={6}>
      <Container>
        <Grid container spacing={3} justifyContent="center">
          {stats.map(({ count, label }) => (
            <Grid item xs={6} md={3} key={label} textAlign="center">
              <MKTypography variant="h2" color="info" fontWeight="bold">
                {count}
              </MKTypography>
              <MKTypography variant="body1" color="text">
                {label}
              </MKTypography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </MKBox>
  );
}

export default StatsThree;
