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
                apiURL: 'http://localhost:1337',
                queryLimit: 30000, // Defaults to 100
                contentTypes: ['posts', 'tags']
            }
        }
    ]
};
