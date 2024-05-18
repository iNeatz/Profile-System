const jwt = require('jsonwebtoken')

const authMiddleware = (req, res, next) => {
   const token = req.header("Authorization") 


}

module.exports = authMiddleware