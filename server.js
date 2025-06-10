
const Datastore = require('nedb-promises')
let Gamedb = Datastore.create(__dirname+'/game.db')

var express = require("express");
var server = express();

var bodyParser = require("body-parser");


server.use(express.static(__dirname+"/public"));
server.use(bodyParser.urlencoded({extended:true}));
server.use(bodyParser.json());

// server.get("/", function (req, res) { //web root
//     res.send("Hello, World!"); //回傳固定內容
// });
 server.get("/score", function (req, res) { //other pages
    //url?user=md&score=1000
    console.log(req.query);
     res.send("req /md");
 });
server.post("/rank", (req,res)=>{
 Gamedb.find({}).sort({time:1}).limit(3).then( (docs)=>{
        if(docs!=null) {
            res.send(docs);
        }
    });
})
 server.post("/postscore", (req,res)=>{
    console.log(req.body);
    Gamedb.insert(req.body).then(docs=>{
      Gamedb.find({}).sort({time:1}).limit(3).then((docs)=>{
        if(docs!=null) {
            res.send(docs);
        }
    });
    });
    
});

server.listen(80);
