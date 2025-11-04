var express = require('express');
var router = express.Router();

const fs = require('fs'); //file system modülü
let routes = fs.readdirSync(__dirname); // bu dosyanın içindeki dosyaların listesini alır
//Sync şeklinde kullandık yani bunu bitirmeden diğer kodlara geçme demek

for(let route of routes){
    if(route.includes(".js") && route !== "index.js"){ //index.js kendisi olduğu için dahil etmedik
router.use("/"+route.replace(".js",""), require('./'+route));
    }
}

module.exports = router;
