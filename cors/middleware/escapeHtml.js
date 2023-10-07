const escapeHTML = require('escape-html');

module.exports = function(app) {
    app.use(escapeHTML());
}