var mongoose = require('mongoose'),
    Agua = mongoose.model('Agua');
exports.list_all_agua = function (req, res) {
    Agua.find({}, function (err, msg) {
        if (err)
            res.send(err);
        res.json(msg);
    });
};
// exports.search_title_agua = function (req, res) {
//     Agua.find({
//         title: req.params.title
//     }, function (err, msg) {
//         if (err)
//             res.send(err);
//         res.json(msg);
//     });
// };
exports.create_agua = function (req, res) {
    var new_msg = new Agua(req.body);
    new_msg.save(function (err, msg) {
        if (err)
            res.send(err);
        res.json(msg);
    });
};