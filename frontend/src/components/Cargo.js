import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/cargo.css';

function Cargo() {
  const { id } = useParams();

  // Fetch cargo data from backend using id

  return (
    <div className="container cargo">
      <div className="cargo_header">
        <h2>Cargo Details</h2>
      </div>
      {/* Render cargo details */}
    </div>
  );
}

export default Cargo;
