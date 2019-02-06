const fetch = require("node-fetch");
const { http } = require("http");
fetch("http://eloquentjavascript.net/20_node.html", {
  method: "GET",
  headers: { Accept: "text/html" }
})
  .then(result => {
    console.log(result.statusText);
  })
  .catch(err => {
    console.log(err);
  });
