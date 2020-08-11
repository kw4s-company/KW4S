require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `شركة خطاب ويب`,
    description: `شركة خطاب ويب للبرمجيات شركة سعودية رسمية لتصميم و برمجة و تطوير التطبيقات و المواقع الالكترونية تتمتع بامكانيات وخبرات كبيرة نضعها في متناول عملائنا الكرام`,
    author: `خطاب`,
    keywords:[" خطاب", "ويب", "تطبيق", "نطبيقات", "مواقع", "مدونة", "حراج", "تصميم", "برمجة", "سعودية", "رسمية", "استضافة", "متاجر", "مساعدة", "صيانة", "اعطال", "تنفيذ", "تطوير", "خدمة", "خدمات"]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
      
      
    },{
      resolve: `gatsby-plugin-tawk.to`,
      options: {
        tawkId: "56e7e240e076c43a261b9dbb",
        // get this from the tawk script widget
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    `gatsby-plugin-layout`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `K4WS`,
        short_name: `K4WS`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logok4ws.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
