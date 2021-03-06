import express from 'express';
import server from './server';

const app = express();

const port = process.env.PORT || 9001;

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});

server(app);
