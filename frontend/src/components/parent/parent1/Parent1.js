import React from 'react';
import BannerImg from './../../Images/BannerImg.jpg';
import award1 from './../../Images/award1.jpg';
import award2 from './../../Images/award2.jpg';

function Parent1() {
  return (
    <div className="container">
      <div className="text-center my-5">
        <h1 className="display-4"><b>Govt Schemes</b></h1>
        <img 
          src={BannerImg} 
          className="img-fluid mb-4 mx-auto d-block" 
          alt="Govt Schemes Banner" 
          style={{ maxHeight: '700px', width: 'auto' }}
        />
        <h1 className="display-4"><b>Achievements</b></h1>
        <div className="d-flex justify-content-center my-4">
          <img 
            src={award1} 
            className="img-fluid mx-4" 
            alt="Achievement 1" 
            style={{ maxHeight: '400px', width: 'auto' }} 
          />
          <img 
            src={award2} 
            className="img-fluid mx-4" 
            alt="Achievement 2" 
            style={{ maxHeight: '400px', width: 'auto' }} 
          />
        </div>
      </div>
    </div>
  );
}

export default Parent1;
