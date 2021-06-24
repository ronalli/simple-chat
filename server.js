const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server, {
	cors: { //CORS policy
		origin: '*'
		// methods: ['GET', 'POST'],
		// allowedHeaders: ["my-custom-header"],
		// credentials: true
	}
})

app.use(express.json())

const rooms = new Map();


app.post('/rooms', (req, res) => {
	const { roomId, userName } = req.body
	console.log(`${roomId} - ${userName}`);
	res.end()
})


io.on('connection', socket => {
	console.log('Connection:', socket.id);
})

server.listen(9999, (err) => {
	if (err) throw Error(err)
	console.log('Server started');
})