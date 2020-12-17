const ghpages = require('gh-pages');

ghpages.publish(
    '__sapper__/export/<your-app-name>',
    {
        branch: 'master',
        repo: 'https://github.com/moskowitza/moskowitza-blog.git',
        user: {
            name: 'moskowitza',
            email: 'aaronmoskowitz@gmail.com'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)