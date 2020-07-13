import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Basics } from "../components/Recipes/Basics"
import { NutritiveValue } from "../components/Recipes/NutritiveValue"
import { Ingredients } from "../components/Recipes/Ingredients"
import { CookingSteps } from "../components/Recipes/CookingSteps"

const RecipeTemplate = ({ data, pageContext, location }) => {
  const recipe = data.allRecipesYaml.nodes[0]
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={recipe.title}
        description={recipe.description}
      />
      <div id="recipe" className="container content is-medium">
        <div className="columns is-desktop">
          <div className="column is-one-third">
            <figure className="image">
              <img src={`/recipes/${recipe.image.name}.${recipe.image.extension}`} />
            </figure>
            <Basics duration={recipe.basics.duration} servings={recipe.basics.servings} />
            <NutritiveValue
              kcal={recipe.nutritiveValue.kcal}
              fat={recipe.nutritiveValue.fat}
              protein={recipe.nutritiveValue.protein}
              carbs={recipe.nutritiveValue.carbs}
              />
          </div>
          <div className="column is-one-third">
            <Ingredients list={recipe.ingredients} />
          </div>
          <div className="column is-one-third">
            <CookingSteps list={recipe.cooking} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default RecipeTemplate

export const pageQuery = graphql`
  query pageQuery($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    allRecipesYaml(limit: 1, filter: {id: {eq: $id}}) {
      nodes {
        id
        title
        date(locale: "de-DE", formatString: "MMM YYYY")
        category
        description
        image {
          relativePath
          absolutePath
          name
          extension
        }
        basics {
          duration
          servings
        }
        nutritiveValue {
          kcal
          fat
          carbs
          protein
        }
        ingredients
        cooking
        tips
      }
    }
  }
`
