import React, { useState } from 'react';
import axios from 'axios';
import '../styles/home.css';

function Home() {
  const [importer, setImporter] = useState('');
  const [exporter, setExporter] = useState('');
  const [goods, setGoods] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/cargo/create', {
        importer,
        exporter,
        goods,
      });
      alert('Cargo created successfully!');
    } catch (error) {
      alert('Error creating cargo.');
    }
  };

  return (
    <div className="container">
      <div className="top_image">
        <img src="/image.png" alt="Ship" />
        <p className="top_headline">Submit new Cargo</p>
      </div>
      <div className="cargo_header">
        <ul className="rainbow_border">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className="form_container">
        <form onSubmit={handleSubmit}>
          <label>
            Importer:
            <input
              type="text"
              value={importer}
              onChange={(e) => setImporter(e.target.value)}
            />
          </label>
          <label>
            Exporter:
            <input
              type="text"
              value={exporter}
              onChange={(e) => setExporter(e.target.value)}
            />
          </label>
          <label>
            Goods:
            <input
              type="text"
              value={goods}
              onChange={(e) => setGoods(e.target.value)}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Home;
