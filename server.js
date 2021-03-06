const cors = require('cors');
const next = require('next');
const Pusher = require('pusher');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
const Sentiment = require('sentiment');
const routes = require('./routes.js');

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });

const handler = routes.getRequestHandler(app);
const sentiment = new Sentiment();

const pusher = new Pusher({
  appId: process.env.REACT_APP_PUSHER_APP_ID,
  key: process.env.REACT_APP_PUSHER_APP_KEY,
  secret: process.env.REACT_APP_PUSHER_APP_SECRET,
  cluster: process.env.REACT_APP_PUSHER_APP_CLUSTER,
  encrypted: true
});

app
  .prepare()
  .then(() => {
    server = express();
    const chatHistory = { messages: [] };

    server.use(cors());
    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({ extended: true }));
    // server.use(handler);

    // server.get('/downloads/mac', (req, res, next) => {
    //   console.log('downloading mac desktop app...');
    //   res.download(path.join(__dirname, 'The Panda Riot-1.0.1.dmg'), (err)=>{
    //     console.log(err);
    //   });
    // });
    // server.get('/downloads/pc', (req, res, next) => {
    //   console.log('downloading PC desktop app...');
    //   res.download(path.join(__dirname, 'The Panda Riot-1.0.1.exe'), (err)=>{
    //     console.log(err);
    //   });
    // });

    // server.get('/guardian', (req, res) => {
    //   res.status(200).sendFile('clap.png', { root:  __dirname + '/static/'} );
    // })

    server.get('*', (req, res) => {
      return handler(req, res);
    });

    
    server.post('/message', (req, res, next) => {
        console.log('hit message ', req.body);
      const { user = null, message = '', timestamp = +new Date() } = req.body;
      const sentimentScore = sentiment.analyze(message).score;

      const chat = { user, message, timestamp, sentiment: sentimentScore };

      chatHistory.messages.push(chat);
      pusher.trigger('chat-room', 'new-message', { chat });
    });

    server.post('/messages', (req, res, next) => {
      res.json({ ...chatHistory, status: 'success' });
    });

    server.listen(port, err => {
        if (err) throw err;
        console.log(`> Ready on http://localhost:${port}`);
      });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });

