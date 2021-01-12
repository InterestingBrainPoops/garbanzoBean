var express = require('express')
var router = express.Router()
var fs = require("fs")
// define the home page route
router.get('/', (req, res) => {
    res.sendFile('./client/index.html', { root: __dirname });
});
router.get('/main.js', (req, res) =>{
    res.writeHead(200);
    let html = fs.readFileSync("./client/main.js", "utf8");
    res.write(html);
    res.end();

});
// define the about route
router.get('/about', function (req, res) {
  res.send('About birds')
})

module.exports = router