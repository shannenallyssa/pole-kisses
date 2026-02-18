// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";

// Material Kit 2 PRO React examples
import RaisedBlogCard from "examples/Cards/BlogCards/RaisedBlogCard";

// Images
import bgImage from "assets/images/examples/blog2.jpg";

function CardRaised() {
  const action = {
    type: "internal",
    route: "/sections/page-sections/general-cards",
    color: "info",
    label: "read more",
  };

  return (
    <MKBox component="section" py={6}>
      <Container>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} md={6} lg={4}>
            <RaisedBlogCard
              image={bgImage}
              category="article"
              title="Cozy 5 Stars Apartment"
              description="The place is close to Barceloneta Beach and bus stop just 2 min by walk."
              author={{
                image: bgImage,
                name: "Author Name",
                date: "Posted on 28 February",
              }}
              action={action}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <RaisedBlogCard
              image={bgImage}
              category="lifestyle"
              title="Office Studio"
              description="The place is close to Metro Station and bus stop just 2 min by walk."
              author={{
                image: bgImage,
                name: "Author Name",
                date: "Posted on 28 February",
              }}
              action={action}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default CardRaised;
