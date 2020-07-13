import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const recipes = data.allRecipesYaml.nodes

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Übersicht" />
      <div className="container">
        {recipes.map(recipe => {
          const title = recipe.title || recipe.fields.ref
          return (
            <div key={recipe.id} className="columns">
              <div key={recipe.fields.ref} className="column is-full">
                <div className="card">
                  <header className="card-header">
                    <Link className="card-header-title" to={recipe.fields.ref}>
                      {title}
                    </Link>
                  </header>
                  <div className="card-content">
                    <div className="content">
                      {recipe.description}
                      <br />
                      <small>{recipe.date}</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allRecipesYaml(sort: {order: DESC, fields: [category, date]}) {
      nodes {
        date(formatString: "DD MMM YYYY", locale: "de-DE")
        title
        description
        fields {
          ref
        }
      }
    }
  }
`
