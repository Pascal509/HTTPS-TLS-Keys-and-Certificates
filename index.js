import https from 'https'
import fs from 'fs';
import express from 'express';

const app = express();

const options = {
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert')
};

app.get('/', (req, res) => res.send('Secure HTTPS response'));

https.createServer(options, app).listen(4430, () => {
    console.log('HTTPS server running at https://localhost:4430');
});