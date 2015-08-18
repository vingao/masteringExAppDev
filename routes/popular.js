var express = require('express');
var router = express.Router();

var instagram = require('../lib/instagram');

var ig = new instagram("743683cce6a54576ae5138d54d6f0a16", "267ffae49f5243e0a838f1b0db65b7fc");
/* GET home page. */
router.get('/', function (req, res, next) {

    ig.get_most_popular_with_cache(function (err, media, limit) {
        if (err) {
            throw err;
        }

        var urls = [];
        media.forEach(function(item) {
            urls.push(item.images.standard_resolution.url);
        });
        res.render('popular', {urls: urls});
    });
});

module.exports = router;
