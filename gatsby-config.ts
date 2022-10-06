import type { GatsbyConfig } from "gatsby";
const markdocConfig = require("./markdoc/config");

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Gatsby Starter Markdoc`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-root-import",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/docs/`,
      },
    },
    {
      resolve: "gatsby-transformer-markdoc",
      //   options: {},
      options: {
        config: markdocConfig,
        fileExtensions: ["mdoc", "md"], // just 'mdoc' by default
      },
    },
  ],
};

export default config;
