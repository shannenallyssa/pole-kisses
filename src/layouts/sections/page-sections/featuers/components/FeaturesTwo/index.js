// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function FeaturesTwo() {
  return (
    <MKBox component="section" py={6}>
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
            More Features
          </MKTypography>
          <MKTypography variant="body1" color="text">
            People in this world shun people for being great. For being a bright color. For standing
            out.
          </MKTypography>
        </Grid>
        <Grid container spacing={3}>
          {[
            { icon: "settings", title: "Customizable", color: "info" },
            { icon: "bolt", title: "Fast Performance", color: "warning" },
            { icon: "lock", title: "Secure by Default", color: "success" },
            { icon: "device_hub", title: "Scalable Architecture", color: "error" },
          ].map(({ icon, title, color }) => (
            <Grid item xs={12} md={6} key={title}>
              <MKBox display="flex" alignItems="center" p={2}>
                <MKBox
                  width="3rem"
                  height="3rem"
                  variant="gradient"
                  bgColor={color}
                  color="white"
                  coloredShadow={color}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  borderRadius="xl"
                  mr={2}
                  flexShrink={0}
                >
                  <Icon fontSize="small">{icon}</Icon>
                </MKBox>
                <MKTypography variant="body1" color="text" fontWeight="regular">
                  {title}
                </MKTypography>
              </MKBox>
            </Grid>
          ))}
        </Grid>
      </Container>
    </MKBox>
  );
}

export default FeaturesTwo;
