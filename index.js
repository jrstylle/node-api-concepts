const express = require("express");
const server = express();

server.get("/simple-text", (request, response) => {
  return response.send(`
  Hello World!
  `);
});
server.get("/json", (request, response) => {
  return response.json({
    message: "Hello World!"
  });
});
server.get("/query-parameters", (request, response) => {
  const { queryParameter } = request.query;
  return response.json({
    queryParameter: `${queryParameter}`
  });
});
server.get("/route-parameters/:routeParameter", (request, response) => {
  const { routeParameter } = request.params;
  return response.json({
    routeParameter: `${routeParameter}`
  });
});

server.listen(3000, () => {
  console.log("server running on port 3000");
});
