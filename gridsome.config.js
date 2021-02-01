// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: '@gridsome/source-strapi',
      options: {
        apiURL: process.env.GRIDSOME_API_URL,
        queryLimit: 1000, // Defaults to 100
        contentTypes: ['blog', 'project', 'follower'], // StrapiPost  获取集合
        // typeName: 'Strapi,
        singleTypes: ['vblog'], // 获取单个数据
      }
    }
  ],
  templates: {
    StrapiBlog: [
      {
        path: '/blog-detail/:id',
        component: './src/templates/Details.vue'
      }
    ]
  }
}
