import React, { useState } from 'react';
import CustomProgressBar from '../../ProgressBar/CustomProgressBar';
import chatIcon from '../../Images/chat-icon.png';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function Parent2() {
  const [userobj,setUserObj]=useState();

  const therapies = [
    'Speech Therapy',
    'Occupational Therapy',
    'Physical Therapy',
    'Behavioral Therapy',
    'Cognitive Therapy'
  ];

  const handleChatClick = () => {
    window.location.href = 'http://localhost:5173/';
  };

  return (
    <div className="card d-flex justify-content-center w-50" >
      <div className="container bg-light p-4 rounded shadow" >
        <div className="bg-white p-4 rounded shadow">
          <h1 className="text-primary">Check Your Child's Progress</h1>
          <h2 className="text-success">Attendance:</h2>
          <CustomProgressBar percentage={100} />
          <h2 className="text-info">Therapy Assigned:</h2>
          <ol className="text-left text-info">
            {therapies.map((therapy, index) => (
              <li key={index} className="my-2">
                <h3>{therapy}</h3>
              </li>
            ))}
          </ol>
          <div className="mt-4" style={{ cursor: 'pointer' }} onClick={handleChatClick}>
           <h3>Chat With Instructor</h3> <img src={chatIcon} alt="Chat Icon" className="img-fluid" style={{ width: '50px', height: '50px' }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Parent2;
