module.exports = function isLoggedIn(req, res, next) {
    if (true ) {
      // user is authenticated
      console.log("user is authenticated")
      next();
    } else {
      // return unauthorized
      res.send(401, "Unauthorized");
    }
  };