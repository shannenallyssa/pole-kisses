// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 PRO React examples
import SimpleBookingCard from "examples/Cards/BookingCards/SimpleBookingCard";

// Images
import bgImage from "assets/images/examples/blog2.jpg";

function BlogPostThree() {
  const actionProps = {
    type: "internal",
    route: "/sections/page-sections/blog-posts",
    color: "info",
    label: "read more",
  };

  return (
    <MKBox component="section" py={6}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          flexDirection="column"
          justifyContent="center"
          mx="auto"
          mb={6}
          textAlign="center"
        >
          <MKTypography variant="h2" mb={1}>
            Latest Articles
          </MKTypography>
          <MKTypography variant="body1" color="text">
            We&apos;re constantly trying to express ourselves and actualize our dreams.
          </MKTypography>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={4}>
            <SimpleBookingCard
              image={bgImage}
              title="Cozy 5 Stars Apartment"
              description="The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to &quot;Naviglio&quot; bar."
              categories={["apartment", "lifestyle"]}
              action={actionProps}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <SimpleBookingCard
              image={bgImage}
              title="Office Studio"
              description="The place is close to Metro Station and bus stop just 2 min by walk and near to &quot;Naviglio&quot; bar."
              categories={["office", "studio"]}
              action={actionProps}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <SimpleBookingCard
              image={bgImage}
              title="Beautiful Castle"
              description="The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to &quot;Naviglio&quot; bar."
              categories={["nature", "history"]}
              action={actionProps}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default BlogPostThree;
