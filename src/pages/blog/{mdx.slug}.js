import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import Layout from '../../components/layout'

const BlogPostTemplate = ({data}) => {
	const image = getImage(data.mdx.frontmatter.hero_image)

	return (
		<Layout pageTitle={data.mdx.frontmatter.title}>
			<GatsbyImage 
				image={image}
				aria-hidden={true}
			/>
			<MDXRenderer>
				{data.mdx.body}
			</MDXRenderer>
		</Layout>
	)
}

export const query = graphql`
	query($slug: String) {
		mdx(slug: {eq: $slug}) {
			body
			frontmatter {
				date(formatString: "MMMM DD, YYYY")
				title
				hero_image {
					childImageSharp {
						gatsbyImageData
					}
				}
			}
		}
	}
`

export default BlogPostTemplate

/*
create the file
write the query (query variable)
render the content
add the link to /blog
*/