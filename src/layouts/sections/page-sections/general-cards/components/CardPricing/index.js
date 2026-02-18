// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

function CardPricing() {
  const plans = [
    { name: "Starter", price: "$9", color: "secondary", features: ["1 Project", "5GB Storage", "Email Support"] },
    { name: "Pro", price: "$29", color: "info", features: ["10 Projects", "50GB Storage", "Priority Support"] },
    { name: "Enterprise", price: "$99", color: "dark", features: ["Unlimited Projects", "500GB Storage", "24/7 Support"] },
  ];

  return (
    <MKBox component="section" py={6}>
      <Container>
        <Grid container spacing={3} justifyContent="center">
          {plans.map(({ name, price, color, features }) => (
            <Grid item xs={12} md={6} lg={4} key={name}>
              <MKBox
                bgColor="white"
                borderRadius="xl"
                shadow="md"
                p={4}
                textAlign="center"
              >
                <MKTypography variant="h5" mb={1}>
                  {name}
                </MKTypography>
                <MKTypography variant="h2" color={color} mb={3}>
                  {price}
                  <MKTypography component="span" variant="body2" color="text">
                    /mo
                  </MKTypography>
                </MKTypography>
                {features.map((feature) => (
                  <MKBox key={feature} display="flex" alignItems="center" mb={1}>
                    <Icon color="success" sx={{ mr: 1 }}>check</Icon>
                    <MKTypography variant="body2" color="text">
                      {feature}
                    </MKTypography>
                  </MKBox>
                ))}
                <MKButton variant="gradient" color={color} fullWidth sx={{ mt: 3 }}>
                  Choose Plan
                </MKButton>
              </MKBox>
            </Grid>
          ))}
        </Grid>
      </Container>
    </MKBox>
  );
}

export default CardPricing;
