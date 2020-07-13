const path = require(`path`)
const _ = require(`lodash`)
const fs = require('fs-extra')
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const recipeTemplate = path.resolve(`./src/templates/recipe.tsx`)
  const result = await graphql(
    `
      {
        allRecipesYaml(sort: {fields: [category, date], order: DESC}, limit: 1000) {
          edges {
            next {
              title
            }
            previous {
              title
            }
            node {
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
          totalCount
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }
  console.log(`Found ${result.data.allRecipesYaml.totalCount} Recipes`)
  const recipes = result.data.allRecipesYaml.edges
  recipes.forEach((recipe, index) => { 
    const path = `recipes/${_.kebabCase(recipe.node.title)}`
    createPage({
      path: path,
      component: recipeTemplate,
      context: {
        id: recipe.node.id
      },
    })
    console.log(`Created Page ${index + 1}/${recipes.length} ${path}`)
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  const publicRecipeImagesPath = "./Public/recipes"

  if (node.internal.type === `RecipesYaml`) {
    try {
      console.log(node)
      const oldImagePath = `./content/recipes/${node.image}`
      const newImagePath = `${publicRecipeImagesPath}/${node.image}`
      console.log(oldImagePath)
      console.log(newImagePath)
      fs.ensureDir(publicRecipeImagesPath)
      fs.copySync(oldImagePath, newImagePath)
      console.log(`Copied File from ${oldImagePath} to ${newImagePath}`)
      createNodeField({
        name: `imageRef`,
        node,
        newImagePath,
      })
      
      const value = 'recipes' + createFilePath({ node, getNode, basePath: `recipes` })
      createNodeField({
        name: `ref`,
        node,
        value,
      })      
    } catch (error) {
      console.log(error)
    }
  }
}