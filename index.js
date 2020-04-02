const http = require('http');

const server = http.createServer((req, res) => {
    // console.log(req, res);
    // if (req.url === '/avicon.ico') {
    //     const img = 'asserts\img\195-1955753_zero-to-production-node-node-js-icon-png.png';
    //     res.setHeader('Content-Type', 'image/x-icon');
    //     res.
    //     res.end();
    // }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Hello Node</title></head>');
    res.write('<body><h1>Hello World</h1></body>');
    res.write('</html>');
    res.end()
});

server.listen(3000)