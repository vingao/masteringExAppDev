var express = require('express');
var router = express.Router();

var ig = require('instagram-node').instagram();
ig.use({"client_id": "743683cce6a54576ae5138d54d6f0a16", "client_secret": "267ffae49f5243e0a838f1b0db65b7fc"});

var popular_cache = {};
function get_most_popular(callback) {
    var timeout = 5;

    if (popular_cache.timeout > (new Date).getTime() && popular_cache.media) {
        return callback(null, popular_cache.media, popular_cache.limit);
    }
    ig.media_popular(function(err, media, limit) {
        popular_cache = {
            "media": media,
            "limit": limit,
            "timeout": (+(new Date())) + (timeout * 1000)
        };

        return callback(err, media, limit);
    });
}
/* GET home page. */
router.get('/', function (req, res, next) {

    get_most_popular(function (err, media, limit) {
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
