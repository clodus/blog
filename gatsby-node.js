/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

// Pulling data from an external source and creating pages without GraphQL

const axios = require("axios")
const get = endpoint => axios.get(`https://pokeapi.co/api/v2${endpoint}`)
const getPokemonData = names =>
  Promise.all(
    names.map(async name => {
      const { data: pokemon } = await get(`/pokemon/${name}`)
      return { ...pokemon }
    })
  )
exports.createPages = async ({ actions: { createPage } }) => {
  // Pulling data from an external source and creating pages without GraphQL

  const allPokemon = await getPokemonData(["pikachu", "charizard", "squirtle"])
  // Create a page that lists Pokémon.
  createPage({
    path: `/pokemon`,
    component: require.resolve("./src/templates/all-pokemon.js"),
    context: { allPokemon },
  })

  // Create page dynamique with data

  const dogData = [
    {
      name: "Fido",
      bread: "Cool",
    },
    {
      name: "Dido",
      bread: "Doooooo",
    },
  ]

  dogData.map(dog => {
    createPage({
      path: `/${dog.name}`,
      component: require.resolve(`./src/templates/dog-template.js`),
      context: { dog },
    })
  })
}
