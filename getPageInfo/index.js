const opengraph = require('open-graph-scraper');

let getPageInfo = (req) => {
    let url = req.query.url;

    let promise = new Promise((resolve, reject) => {
        opengraph({url: url}, function (err, results) {
            if (err) {
                resolve(err)
            }
            resolve(results);
        })
    });

    return promise
}

module.exports = (context, req) => {
    getPageInfo(req)
    .then((results) => {
        context.res = {
            body: results
        };

        context.done();
    });    
};