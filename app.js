const http = require('http');
const routes = require('./routes');

const server = http.createServer(routes.handler);
console.log(routes.someText);

server.listen(4000,function(){
    console.log("NodeJs project has started in 4000")
});