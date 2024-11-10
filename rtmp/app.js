const NodeMediaServer = require('node-media-server');

const config = {
  rtmp: {
    port: 1935,
    chunk_size: 60000,
    gop_cache: true,
    ping: 30,
    ping_timeout: 60
  },
  http: {
    port: 8000,
    allow_origin: '*'
  }
};




 const http = require('http');
 const fs = require('fs');

 const host = '0.0.0.0';
 const port = 8080;

 const httpServer = http.createServer(httpHandler);

 httpServer.listen(port, host, () => {
     console.log(`HTTP server running at http://${host}:${port}/`);
 });

 function httpHandler(req, res) {
     fs.readFile('./public/' + req.url, function (err, data) {

         if (err == null ) {

             res.writeHead(200, {'Content-Type': 'text/html'});
             res.write(data);
             res.end();
         }
     });
 }




var nms = new NodeMediaServer(config)
nms.run();
