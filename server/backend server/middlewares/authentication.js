var jwt = require("jsonwebtoken");

// Leave a blank line between the require statements and the actual code.
// Also remove all commented log statements. It is better to keep your
// code clean of dead or commented statements.
const authentication = (req, res, next) => {
  // const token = req.headers.authorization;
  const token = req.cookies.access_token ;
  // const googletoken =  req.cookies.jwt
  // console.log(token)
  if (!token) {
      return res.send({message:"Please Login Again to access"});
  }
  jwt.verify(token, process.env.secret_key, (err, decoded) => {
    if (err) {
      return res.send({message:"Please Login Again"});
    }
    // console.log(decoded);
    // console.log("b", req.user)
    req.user = decoded;
    // console.log("a", req.user)
    next();
  });
};

module.exports = authentication;
