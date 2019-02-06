const { createServer } = require("http");
let server = createServer((request, response) => {
  response.writeHead(200, { "contet-type": "text/html" });
  response.write(`
    <h1>hola hola </h1>
    ${request.url}
    `);
  response.end();
});
server.listen(8000);
console.log("Escuchando por : puerto 8000" );
