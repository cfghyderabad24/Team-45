import React from 'react';
import BannerImg from './../../Images/BannerImg.jpg';
import award1 from './../../Images/award1.jpg'
import award2 from './../../Images/award2.jpg'
function Parent1() {
  return (
    <div className="container">
      <div className="text-center my-5">
        <h1 className="display-4"><b>Govt Schemes</b></h1>
        <img src={BannerImg} className="img-fluid mb-4" alt="Govt Schemes Banner" height={700} width={700}/>
        <h1 className="display-4"><b>Achievements</b></h1>
        <img src={award1} className="img-fluid mx-4" alt="Achievement" height={400} width={400} />
        <img src={award2} className='img-fluid mx-4' alt="Achievement" height={400} width={400}/>
      </div>
    </div>
  );
}

export default Parent1;
