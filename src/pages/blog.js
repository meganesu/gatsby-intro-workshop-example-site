import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";

const BlogPage = ({data}) => {
	console.log(data)
  return (
    <Layout pageTitle="My Blog Posts">
			<ul>
				{ data.allFile.nodes.map(node => {
					return (
						<li>
							{node.name}
						</li>
					)
				})}
			</ul>
		</Layout>
  );
};

export const query = graphql`
  query BlogPosts {
    allFile(filter: { dir: { regex: "/blog/" } }) {
      nodes {
        name
      }
    }
  }
`;

export default BlogPage;
