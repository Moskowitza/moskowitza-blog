const ghpages = require('gh-pages');

ghpages.publish(
    '__sapper__/export/moskowitza-blog',
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