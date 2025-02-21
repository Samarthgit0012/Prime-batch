const f = require('fs').promises;
const http=require('http');
const server = http.createServer((request, response) => {
    response.write("WElciome to http and Fs module");
    response.end("");
});

server.listen(prototype, () => {
    console.log("Server is running "+PORT);
})