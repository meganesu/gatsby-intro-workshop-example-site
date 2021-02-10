import React from "react";
import Layout from "../components/layout";

import { StaticImage } from "gatsby-plugin-image";

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>My name is Megan. I like teaching, video games, and dogs!</p>
      <StaticImage
        src="https://meganesulli.com/static/ffc7ce197abc7e8568b833a954787c35/b17f8/clifford.jpg"
        alt="A reddish brown pitbull"
      />
    </Layout>
  );
};

export default AboutPage;
