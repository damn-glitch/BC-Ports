// CargoChain/backend/server.js
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cargoRoutes from './routes/cargoRoutes.js';
import { initializeHelia } from './controllers/cargoController.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/cargo', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

app.use('/api/cargo', cargoRoutes);

const startServer = async () => {
  await initializeHelia();
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();
