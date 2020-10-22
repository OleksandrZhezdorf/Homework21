const http = require("http");
const url = require("url");
const queryString = require("querystring");
const { read, write } = require("./utils");
const { filter, defaultTo, last, eq } = require("lodash");

const hostname = "localhost";
const port = 3000;

const server = http.createServer((request, response) => {
  const parsedUrl = url.parse(request.url);
  const { id } = queryString.parse(parsedUrl.query);

  response.setHeader("Access-Control-Allow-Origin", "*");

  

  response.end(JSON.stringify(read("messages")));
});

server.listen(port, hostname, () => {
  console.log(`Server is listening ${hostname}:${port}`);
});

const value = true;

const currentValue = value ? value : false;


