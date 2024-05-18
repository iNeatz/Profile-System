require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const connectToDB = require('./config/db')
const authRoutes = require('./routes/auth')

//database connection
connectToDB()

//middlewares
app.use(express.json())
app.use(cors())

//routes
app.use('/api/auth', authRoutes)

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
	console.log(`Listening on port: ${PORT}`)
})
