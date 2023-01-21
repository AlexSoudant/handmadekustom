module.exports = {
  pathPrefix: "/metalmaster",
  siteMetadata: {
    siteUrl: "https://www.metalmaster.fr",
    title: "Metal Master",
  },
  plugins: ["gatsby-plugin-netlify-cms", 
    "gatsby-plugin-sass",
    'gatsby-plugin-postcss',
    `gatsby-plugin-styled-components`, 
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name:`Metal Master`,
        short_name:`metalmaster`,
        start_url:`/`,
        background_color:`#663399`,
        theme_color:`#663399`,
        display:`minimal-ui`,
        icon:`src/images/logo1.png`
      }
    }
  ],
};
