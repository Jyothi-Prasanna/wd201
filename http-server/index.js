// index.js

const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
const minimist = require('minimist');

const args = minimist(process.argv.slice(2));
const port = args.port || 3000; // Default port is 3000

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);

    // Handle /registration route
    if (parsedUrl.pathname === '/registration') {
        const filePath = path.join(__dirname, 'registration.html');
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Internal Server Error');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    } else if (parsedUrl.pathname === '/') {
        // Handle other routes or serve the default page (project.html)
        // Add your existing route handling logic here
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
