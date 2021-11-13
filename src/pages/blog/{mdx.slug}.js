import * as React from 'react'
import { graphql, Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import Logo from '../../images/logo.png';

const BlogPost = ({ data }) => {
    const image = getImage(data.mdx.frontmatter.heroImage)
    
    return (
        
    <div className="max-w-6xl mx-auto flex flex-col justify-center bg-green-200">
    <header className="md:flex flex-wrap items-center heropattern-topography-yellow-400 px-8 py-6">
            <div className="md:flex md:flex-1">
            <Link to="/">
                <div className="flex-grow mt-1 text-center md:text-left">
                    <img src={Logo} alt="logo" className="w-56 inline-block"/>
                </div>
            </Link>
            </div>

                <nav className="flex-grow sm:flex-grow-0 md:font-semibold md:uppercase min-h-screenmt-4 mt-4 md:mt-0 overflow-y-auto">
                    <ul className="flex justify-center content-center">
                        <li className="mx-4">
                            <Link to={'/summercamp'} className="underline text-yellow-400 font-semibold uppercase">Summer Camp</Link>
                        </li>
                        <li className="mx-4">
                            <Link to={'/programs'} className="underline text-yellow-400 font-semibold uppercase">Programs</Link>
                        </li>
                        <li className="mx-4">
                            <Link to={'/support'} className="underline text-yellow-400 font-semibold uppercase">Support</Link>
                        </li>
                        <li className="mx-4">
                            <Link to={'/about'} className="underline text-yellow-400 font-semibold uppercase">About</Link>
                        </li>
                        <li className="mx-4">
                            <Link to={'/contact'} className="underline text-yellow-400 font-semibold uppercase">Contact</Link>
                        </li>
                    </ul>
                </nav> 
        </header>  
        <div>
            <GatsbyImage
                    image={image}
                    alt={data.mdx.frontmatter.heroImageAlt}
                    className="rounded-2xl shadow-xl ml-2"
                />
            </div>
                <p className="font-semibold text-3xl uppercase">{data.mdx.frontmatter.title}</p>
                <p className="">Posted: {data.mdx.frontmatter.date}</p>
                <hr />
            <div className="mx-4">
                <MDXRenderer>       
                    {data.mdx.body}
                </MDXRenderer>
            </div>
        </div>
    )
  }

export const query = graphql`
query MyQuery($id: String) {
  mdx(id: {eq: $id}) {
    body
    frontmatter {
      heroImageAlt
      heroImage {
        childImageSharp {
          gatsbyImageData
        }
      }
      title
      date(formatString: "MMMM DD, YYYY")
    }
    excerpt(pruneLength: 100, truncate: false)
  }
}
`

export default BlogPost