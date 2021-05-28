const Router = require('express')
const router = new Router()
const controller = require('./authController')
const { check } = require("express-validator")
const authMiddleware = require('./middleware/authMiddleware')

router.get('/', function (req, res) {
    res.sendFile(__dirname + '/login.html');
})
router.get('/register.html', function (req, res) {
    res.sendFile(__dirname + '/register.html');
})
router.get('/chat.html', function (req, res) {
    res.sendFile(__dirname + '/chat.html');
})
router.post('/registration', [
    check('username', "Имя пользователя не может быть пустым").notEmpty(),
    check('password', "Пароль должен быть больше 4 и меньше 10 символов").isLength({ min: 4, max: 10 })
], controller.registration)

router.post('/login', controller.login)


module.exports = router