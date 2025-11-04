var express = require('express');
var router = express.Router();
var isAuthenticated = true; // Bu değeri gerçek doğrulama mantığınızla değiştirin

router.all('/*', (req, res, next) => {
if(isAuthenticated){
    next();
    // Kullanıcı doğrulanmış, isteğe devam et
}  else{
    res.status(401).json({success: false, message: 'Unauthorized'});
    return; // İsteği sonlandır
}
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({success: true, message: 'Categories route works fine'});
});

module.exports = router;
