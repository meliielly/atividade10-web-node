const http = require("http");

const hostname = "localhost";
const port = 3000;

const server = http.createServer((request, response) => {
    if(request.url === '/'){
        console.log(request.url);
        response.statusCode = 200;
        response.setHeader("Content-Type", "text/html");
        response.end(`<h1>Ola! Seja bem vindo(a).</h1>`);
    }else if(request.url === '/sobre'){
        console.log(request.url);
        response.statusCode = 200;
        response.setHeader("Content-Type", "text/html");
        response.end(`<h1>Nome: Empresa XXX Rua: YYY n° ZZZ Bairro: XYZ</h1>`);
    }else if(request.url === '/contato/whatsapp'){
        console.log(request.url);
        response.statusCode = 200;
        response.setHeader("Content-Type", "text/html");
        response.end(`<h1>Contato: (41)XXXXX-XXXX</h1>`);
    }else{
        console.log(request.url);
        response.statusCode = 404;
        response.setHeader("Content-Type", "text/html");
        response.end(`Not Found`);
    }
  
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});