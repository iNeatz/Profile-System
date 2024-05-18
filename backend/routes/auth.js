const router = require('express').Router()
const { User, validate } = require('../models/User')
const Joi = require('joi')
const bcrypt = require('bcryptjs')
const authMiddleware = require('../middlewares/authMiddleware')

//Register Route
router.post('/signup', async (req, res) => {
	try {
		const { error } = validate(req.body)

		if (error)
			return res.status(400).send({
				message: error.details[0].message,
			})

		const user = await User.findOne({
			email: req.body.email,
		})
		if (user)
			return res.status(409).send({
				message: 'User with this Email already exists.',
			})

		const salt = await bcrypt.genSalt(Number(process.env.SALT))
		const hashedPassword = await bcrypt.hash(req.body.password, salt)

		await new User({ ...req.body, password: hashedPassword }).save()

		res.status(201).send({
			message: 'User created successfully.',
		})
	} catch (error) {
		res.status(500).send({ message: 'Internal Server Error' })
	}
})

//Login Route
router.post('/login', async (req, res) => {
	try {
		const { error } = validateSignIn(req.body)

		if (error)
			return res.status(400).send({
				message: error.details[0].message,
			})

		const user = await User.findOne({
			email: req.body.email,
		})
		if (!user)
			return res.status(401).send({
				message: "User with this Email doesn't exist",
			})

		const validPassword = await bcrypt.compare(req.body.password, user.password)

		if (!validPassword)
			return res.status(401).send({ message: 'Invalid Credentials' })

		const token = user.generateAuthToken()
		res.status(200).send({
			data: token,
			message: 'Logged In Successfully',
		})
	} catch (error) {
		res.status(500).send('Internal Server Error')
	}
})

//Get Current User
router.get('/profile', authMiddleware, async (req, res) => {
	try {
		const userData = req.user
		console.log(userData)
		return res.status(200).send({
			data: userData,
		})
	} catch (error) {
		res.status(500).send({
			message: 'Internal Server Error',
		})
	}
})

//Validation for Sign In Form
const validateSignIn = (data) => {
	const schema = Joi.object({
		email: Joi.string().email().required().label('Email'),
		password: Joi.string().required().label('Password'),
	})
	return schema.validate(data)
}

module.exports = router
