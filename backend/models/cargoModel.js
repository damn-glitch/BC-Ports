// CargoChain/backend/models/cargoModel.js
import mongoose from 'mongoose';

const cargoSchema = new mongoose.Schema({
  importer: String,
  exporter: String,
  goods: String,
  // Other fields
});

export default mongoose.model('Cargo', cargoSchema);
