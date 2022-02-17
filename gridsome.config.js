// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
    siteName: 'Gridsome',
    plugins: [
        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'BlogPost',
                path: './content/blog/**/*.md',
                remark: {}
            }
        },
        {
            use: '@gridsome/source-strapi',
            options: {
                apiURL: process.env.GRIDSOME_API_URL,
                queryLimit: 30000, // Defaults to 100
                contentTypes: ['posts', 'tags'],
                singleTypes: ['general']
            }
        }
    ],
    templates: {
        StrapiPosts: [
            {
                path: '/post/:id',
                component: './src/templates/Post.vue'
            }
        ],
        StrapiTags: [
            {
                path: '/tag/:id',
                component: './src/templates/Tag.vue'
            }
        ]
    }
};
