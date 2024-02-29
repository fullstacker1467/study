import { Router } from "express";
import Product from "../models/Product.js";
import authMiddleware from "../middleware/auth.js"
import userMiddleware from "../middleware/user.js";
const router = Router()

router.get("/", async (req, res) => {
    const products = await Product.find().lean()
    res.render('index', {
        title: "Express shop",
        products: products
    })
});
router.get("/add", authMiddleware, (req, res) => {
    res.render('add', {
        title: "Add-product",
        isAdd: true,
        addError: req.flash('addError')
    })
});
router.get("/products", (req, res) => {
    res.render('products', {
        title: "Products",
        isProduct: true
    })
});
router.post('/add-products', userMiddleware, async (req, res) => {
    const { price, image, description, title } = req.body
    if (!price || !image || !description || !title) {
        req.flash('addError', 'All fields are requiered')
        res.redirect('/add')
        return
    }
    await Product.create({ ...req.body, user: req.userId })
    res.redirect('/')
})

export default router