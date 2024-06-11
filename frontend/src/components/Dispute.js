import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/dispute.css';

function Dispute() {
  const { id } = useParams();

  // Fetch dispute data from backend using id

  return (
    <div className="container dispute">
      <div className="dispute_header">
        <h2>Dispute Resolution</h2>
      </div>
      {/* Render dispute details */}
    </div>
  );
}

export default Dispute;
