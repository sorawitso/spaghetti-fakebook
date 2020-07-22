


module.exports.index = function (req, res) {
    User.find(function (err, users) {
        if (err) {
            next(err);
        } else {
            res.json(users);
        }
    });
    res.status(200).json(users);
}