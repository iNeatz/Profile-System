const jwt = require('jsonwebtoken')
const { User } = require('../models/User')

const authMiddleware = async (req, res, next) => {
	const token = req.header('Authorization')

	if (!token)
		return res.status(401).send({
			message: 'Unauthorized. Token not Provided',
		})

	const jwtToken = token.replace('Bearer ', '').trim()

	try {
		const isVerified = jwt.verify(jwtToken, process.env.JWT_PRIVATE)

		const userData = await User.findOne({
			email: isVerified.email,
		}).select('-password')

		req.user = userData
		req.token = token
		req.userId = userData._id

		next()
	} catch (error) {
		return res.status(401).send({
			message: 'Unauthorized. Invalid Token',
		})
	}
}

module.exports = authMiddleware
