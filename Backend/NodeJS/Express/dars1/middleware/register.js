export default function (req, res, next) {
    if (req.cookies.token) {
        res.redirect('/')
        return
    }
    next()
}