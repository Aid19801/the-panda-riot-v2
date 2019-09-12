const routes = require('next-routes');

// dynamic routing for blogs / blog IDs etc. 
// ref https://prismic.io/blog/seo-with-react-and-nextjs

// 1. add routes.
// 2. add server (see /server.js)
// 3. update build env to include that server (see pkg json's ""):-
// "scripts": {
//     "dev": "node server.js",
//     "build": "next build",
//     "postinstall": "npm run build",
//     "start": "NODE_ENV=production node server.js"
//   }

module.exports = routes()
    .add('index', '/')
    .add('home', '/home')
    .add('signin', '/signin')
    .add('signup', '/signup')
    .add('news', '/news')
    .add('news-story', '/news/:uid')
    .add('notfound', '/*')

