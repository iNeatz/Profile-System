const mongoose = require('mongoose')

module.exports = () => {
	const connectionParams = {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	}

	try {
		mongoose.connect(process.env.MONGODB_URI, connectionParams)
		console.log('Connected to MongoDB')
	} catch (error) {
      console.log(error)
      console.log('Failed to connect to MongoDB');
   }
}
