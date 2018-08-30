const remarkHighlight = require('remark-highlight.js')

module.exports = {
  siteMetadata: {
    title: 'Gatsby Documentation Starter | Apurav Chauhan',
    githubProject:'https://github.com/apuravchauhan/gatsby-documentation-starter/blob/master/src/pages'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-documentation-starter',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-workbox`,
      options: {
        cacheId: 'apuravchauhan-docstarter'
      }
    },
    {
      resolve: `gatsby-mdx`,
      options: {
        extensions: [".mdx", ".md"],
        defaultLayouts: {
          default: require.resolve("./src/components/layout.js")
        },
        mdPlugins:[remarkHighlight]
      }
    }
  ],
}
