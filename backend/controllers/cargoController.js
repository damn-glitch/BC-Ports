// CargoChain/backend/controllers/cargoController.js
import Cargo from '../models/cargoModel.js';
import fs from 'fs';
import { createHelia } from 'helia';
import { unixfs } from '@helia/unixfs';

// Initialize Helia and UnixFS
let helia;
let fsUnix;

export const initializeHelia = async () => {
  try {
    helia = await createHelia();
    fsUnix = unixfs(helia);
    console.log('Helia and UnixFS initialized successfully');
  } catch (error) {
    console.error('Error initializing Helia:', error);
  }
};

const addFile = async (filePath) => {
  try {
    const file = fs.readFileSync(filePath);
    const fileAdded = await fsUnix.add({ path: filePath, content: file });
    return fileAdded.cid;
  } catch (error) {
    console.error('Error adding file to IPFS:', error);
    throw error;
  }
};

// Create new cargo
export const createCargo = async (req, res) => {
  const newCargo = new Cargo(req.body);
  try {
    const savedCargo = await newCargo.save();
    res.status(201).json(savedCargo);
  } catch (err) {
    console.error('Error creating cargo:', err);
    res.status(400).json({ message: err.message });
  }
};

// Get cargo by ID
export const getCargo = async (req, res) => {
  try {
    const cargo = await Cargo.findById(req.params.id);
    res.status(200).json(cargo);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

// Upload file and store in IPFS using Helia
export const uploadFile = async (req, res) => {
  try {
    const filePath = req.file.path;
    const cid = await addFile(filePath);
    res.status(200).json({ cid: cid.toString() });
  } catch (err) {
    console.error('Error uploading file:', err);
    res.status(500).json({ message: err.message });
  }
};
