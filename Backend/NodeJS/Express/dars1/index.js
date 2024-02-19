import express from "express";
import { create } from "express-handlebars";
import * as dotenv from "dotenv"
import mongoose from "mongoose";

// Routes
import AuthRoutes from './routes/auth.js'
import ProductsRoutes from './routes/products.js'

dotenv.config()

const app = express();
const hbs = create({ defaultLayout: 'main', extname: 'hbs' })

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', './views')

app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use(express.json())

app.use(AuthRoutes)
app.use(ProductsRoutes)

mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
}, () => console.log("Mongo DB connected"))

const PORT = process.env.PORT || 4100;
app.listen(PORT, () => console.log(`Server hozirda http://localhost:${PORT} da ishlamoqda`));