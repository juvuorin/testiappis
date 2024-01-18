var express = require("express")
var cors = require("cors")

var app = express();
var port = process.env.PORT || 3000
express.json()
app.use(cors())

var path = require('path');

app.use('/', express.static(path.join(__dirname, '/my-app/build')))


app.get('/jeps',function(req, res) {
  res.send("Jeps");
});
  

app.listen(port, () => {
    console.log("Serveri pyörii portissa: " + port)
})
//module.exports = app;










/* 
http.createServer(function(request, response) {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.end('Terve maailma! Ja terve vielä toisenkin kerran!');
}).listen(port);

console.log(`Server running at http://localhost:${port}`);
 */