import https from 'https'
import fs from 'fs';
import express from 'express';

const app = express();

// Load SSL certificate and key
const options = {
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert')
};

// Render scans port from `process.env.PORT`
const PORT = process.env.PORT || 443;

// Listen on 0.0.0.0 so it works publicly
https.createServer(options, app).listen(PORT, '0.0.0.0', () => {
  console.log(`HTTPS server running at https://0.0.0.0:${PORT}`);
});