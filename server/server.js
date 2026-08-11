import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import messageRoutes from './routes/messageRoutes.js';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect Database (mocked if no URI provided)
if (process.env.MONGO_URI) {
  connectDB();
} else {
  console.log('No MONGO_URI provided, skipping DB connection for now.');
}

// Routes
app.use('/api/products', productRoutes);
app.use('/api/contact', messageRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
