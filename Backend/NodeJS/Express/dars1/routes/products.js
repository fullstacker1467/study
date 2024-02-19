import { Router } from "express";

const router = Router()

router.get("/", (req, res) => {
    res.render('index', {
        title: "Express shop"
    })
});
router.get("/add", (req, res) => {
    res.render('add', {
        title: "Add-product",
        isAdd: true
    })

});
router.get("/products", (req, res) => {
    res.render('products', {
        title: "Products",
        isProduct: true
    })
});

export default router