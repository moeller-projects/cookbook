import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          authors
        }
      }
    }
  `)

  const { authors } = data.site.siteMetadata
  return (
    <div>      
      <p>
        Aus {authors.join(' & ')} Küche
      </p>
    </div>
  )
}

export default Bio
