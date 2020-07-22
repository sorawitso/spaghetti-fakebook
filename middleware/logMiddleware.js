module.exports.intercepter = async function (req, res, next) {
    console.log(`URL : ${req.url} | Method : ${req.method}`);
    next();
}