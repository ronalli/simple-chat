const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server, {
	cors: { //CORS policy
		origin: '*',
		methods: ['GET', 'POST'],
		allowedHeaders: ["my-custom-header"],
		credentials: true
	}
})


const rooms = new Map();


app.get('/rooms', (req, res) => {
	res.json(rooms)
})

io.on('connection', socket => {
	console.log('Connection:', socket.id);
})

server.listen(9999, (err) => {
	if (err) throw Error(err)
	console.log('Server started');
})