import { Router } from "express";
import bcrypt from 'bcrypt';
import User from "../models/User.js";
import { generateJWTToken } from "../services/token.js";

const router = Router()

router.get("/login", (req, res) => {
    res.render('login', {
        title: "Login",
        isLogin: true,
        loginError: req.flash('loginError')
    })
});
router.get("/register", (req, res) => {
    res.render('register', {
        title: "Register",
        isRegister: true,
        registerError: req.flash('registerError')
    })
});
router.post('/login', async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        req.flash('loginError', "All fields is required")
        res.redirect('/login')
        return
    }
    const existUser = await User.findOne({ email })
    if (!existUser) {
        req.flash('loginError', "User not found")
        res.redirect('/login')
        return
    }
    const isPassEqual = await bcrypt.compare(password, existUser.password)
    if (!isPassEqual) {
        console.log("Password is not correct");
        return
    }
    const token = generateJWTToken(existUser._id)
    res.cookie('token', token, { secure: true })
    res.redirect('/')
})
router.post('/register', async (req, res) => {
    const { email, password, firstName, lastName } = req.body
    const candidate = await User.findOne({ email })
    if (candidate) {
        req.flash('registerError', "User already exist")
        res.redirect('/register')
        return
    }
    if (!email || !password || !firstName || !lastName) {
        req.flash('registerError', 'All fields are requiered')
        res.redirect('/register')
        return
    }
    const hashedPassword = await bcrypt.hash(password, 10)
    const userData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: hashedPassword,
    }
    const user = await User.create(userData)
    const token = generateJWTToken(user._id)
    res.cookie('token', token, { secure: true })
    res.redirect('/')
})

export default router