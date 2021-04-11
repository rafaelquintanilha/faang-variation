const yf = require("yahoo-finance")
const path = require(`path`)

exports.createPages = async ({ actions: { createPage } }) => {
  const homePageTemplate = path.resolve(`src/components/Home.js`)

  const symbols = ["FB", "AMZN", "AAPL", "NFLX", "GOOG"]
  const prices = await yf.quote({
    symbols,
    modules: ["price"],
  })

  const buildTime = new Date()

  createPage({
    path: `/`,
    component: homePageTemplate,
    context: {
      prices,
      buildTime,
    },
  })
}
