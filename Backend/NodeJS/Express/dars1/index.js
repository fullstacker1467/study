import express from "express";
import { create } from "express-handlebars";
import mongoose from "mongoose";
import flash from 'connect-flash'
import session from "express-session";
import dotenv from 'dotenv'

// Routes
import AuthRoutes from './routes/auth.js'
import ProductsRoutes from './routes/products.js'

dotenv.config()

const app = express();
const hbs = create({ defaultLayout: 'main', extname: 'hbs' })

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', './views')

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(session({ secret: "Suhrob", resave: false }))
app.use(flash())

app.use(AuthRoutes)
app.use(ProductsRoutes)

mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGODB_URL).then(() => console.log('Connected to MongoDB')).catch(error => console.error('Error connecting to MongoDB:', error));
const PORT = process.env.PORT || 4100
app.listen(PORT, () => console.log(`Server hozirda http://localhost:${PORT} da ishlamoqda`));