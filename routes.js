const routes = require('next-routes');

module.exports = routes()
    .add('index', '/')
    .add('home', '/home')
    .add('gigs', '/gigs')
    .add('signin', '/signin')
    .add('signup', '/signup')
    .add('news', '/news')
    .add('news-story', '/news/:uid')
    .add('acts', '/acts')
    .add('act', '/acts/:uid')
    .add('chat', '/chat')
    .add('Chat', '/messages')
    .add('ChatMessage', '/message')
    
    .add('downloads', '/downloads')
    .add('download', '/downloads/:uid')

    .add('discussions', '/discussions')
    .add('discussion', '/discussion/:id')

    .add('guardian', '/guardian')
    
    .add('notfound', '/*')

