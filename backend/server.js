import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import connectDB from "./config/db.js";
import errorHandler from "./middleware/errorHandler.js"
import authRouter from "./routes/authRoutes.js";
import userRouter from "./routes/userRoutes.js"
import productRouter from "./routes/productRoutes.js"
import cartRouter from "./routes/cartRoutes.js"
import orderRouter from "./routes/orderRoutes.js"
import reviewRouter from "./routes/reviewRoutes.js"
import EmailHandler from "./email.js"


// Load environment variables
dotenv.config();

// Connect to database
connectDB();

const app = express();

app.use(express.json())
app.use(
  cors({
    origin: (origin, callback) => {
      const originWithoutSlash = origin ? origin.replace(/\/$/, '') : origin;
      const allowedOrigin = process.env.FRONTENDURL;

      if (originWithoutSlash === allowedOrigin || !origin) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

// Routes
app.use('/api/auth', authRouter);
app.use('/api/users', userRouter);
app.use('/api/products', productRouter);
app.use('/api/orders', orderRouter);
app.use('/api/cart', cartRouter);
app.use('/api/reviews', reviewRouter);

app.get('/', (req, res) => {
  res.send('E-commerce API is running');
});

app.post("/email", EmailHandler.sendCustomerMail)

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
