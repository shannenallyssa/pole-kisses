const footerTwoCode = `// Material Kit 2 PRO React components
import MKTypography from "components/MKTypography";

// Material Kit 2 PRO React examples
import CenteredFooter from "examples/Footers/CenteredFooter";

function FooterTwo() {
  const date = new Date().getFullYear();

  const footerContent = {
    brand: {
      name: "MATERIAL UI DESIGN",
      description: "The next generation of design systems.",
    },
    socials: [
      { icon: <i className="fab fa-facebook" />, link: "https://www.facebook.com/CreativeTim/" },
      { icon: <i className="fab fa-twitter" />, link: "https://twitter.com/creativetim" },
      {
        icon: <i className="fab fa-instagram" />,
        link: "https://www.instagram.com/creativetimofficial/",
      },
      { icon: <i className="fab fa-github" />, link: "https://github.com/creativetimofficial" },
    ],
    links: [
      { name: "about us", href: "https://www.creative-tim.com" },
      { name: "blog", href: "https://www.creative-tim.com" },
      { name: "pricing", href: "https://www.creative-tim.com" },
      { name: "contact", href: "https://www.creative-tim.com" },
    ],
    copyright: (
      <MKTypography variant="button" color="secondary">
        Copyright &copy; {date} Material Design by{" "}
        <MKTypography
          component="a"
          href="https://www.creative-tim.com"
          target="_blank"
          rel="noreferrer"
          variant="button"
          color="secondary"
        >
          Creative Tim
        </MKTypography>
        .
      </MKTypography>
    ),
  };

  return <CenteredFooter content={footerContent} />;
}

export default FooterTwo;`;

export default footerTwoCode;
