const express = require('express');
const router = express.Router();

router.get('/:id', (req, res, next) =>  {
//req objesi bize gönderilin isteğe dair (body,header..)bilgileri verir.
//res objesi ise bizden istenilen cevaba karşılık veriyi göndermemizi sağlar.
//next objesi ise bir sonraki middleware fonksiyonunu çağırmak için kullanılır. next();
res.json({
    body:req.body,
    params:req.params,
    query:req.query,
    headers:req.headers
});
console.log(req.body);

});

//app.jsde require ile tanımladığımız için burda module. şeklinde kullanabiliyoruz.
module.exports = router;