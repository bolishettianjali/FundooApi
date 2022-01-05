const jwt = require('jsonwebtoken');
var auth = (req, res, next) => {
    let token = req.headers['token']
     console.log(" token=====>>>>>>",token);
     
     jwt.verify(token, "Anjali", function (err, decoded) {
          if (err) {
               return res.status(401).send({ message: 'Not Authenticated' });
          } else {
               req.body['data'] = decoded;
               req.token = decoded;
               next();
          }
     });

}
module.exports = auth;