import React from 'react';
import './CustomProgressBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function CustomProgressBar({ percentage }) {
  let progressBarClass = '';

  if (percentage <= 50) {
    progressBarClass = 'custom-red';
  } else if (percentage <= 75) {
    progressBarClass = 'custom-yellow';
  } else {
    progressBarClass = 'custom-green';
  }

  return (
    <div className="progress">
      <div
        className={`progress-bar ${progressBarClass}`}
        role="progressbar"
        style={{ width: `${percentage}%` }}
        aria-valuenow={percentage}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        {percentage}%
      </div>
    </div>
  );
}

export default CustomProgressBar;
