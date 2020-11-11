const ghpages = require("gh-pages");

ghpages.publish('build', {
    branch: 'main',
    message: 'auto generated with gh-pages',
    repo: 'https://github.com/sarigu/sarigu.github.io',
    dest: 'react' //des is the folder
}, (error) => {
    if (error) {
        console.log(error);
    }
});