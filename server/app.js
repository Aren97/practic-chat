const app = require('express')()
const server = require('http').createServer(app)
const io = require('socket.io')(server)
const users = require('./users')()

const m = (name, text, id) => ({name, text, id})

io.on('connection', socket => {

  socket.on('userJoined', (data, callback) => {
    if (!data.name || !data.room) {
      return callback({ valid: false, text: 'Данные не верны' })
    }

    socket.join(data.room)

    users.remove(socket.id)
    users.add({
      id: socket.id,
      name: data.name,
      room: data.room
    })

    callback({ valid: true, userId: socket.id })
    socket.emit('newMessage', m('admin', `Добро пожаловать ${data.name}`))
    socket.broadcast
      .to(data.room)
      .emit('newMessage', m('admin', `Пользователь ${data.name} зашел.`))
  })

  socket.on('createMessage', (data, callback) => {
    if (!data.text) {
      return callback({ valid: false, text: 'текст не может быть пустым' })
    }

    const user = users.get(data.id)

    if (user) {
      io.to(user.room).emit('newMessage', m(user.name, data.text, user.id))
    }

    return callback({ valid: true, text: 'Сообщение отправлено' })
  })
})

module.exports = {
  app,
  server
}

