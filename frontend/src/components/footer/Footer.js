import React from "react";
// import logImg from "../assets/images/logo.png";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className='bg-[#F3F4F8] py-10 pt-32'>
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
          <div className='logo'>
            {/* <img src={logImg} alt='Subiksha Logo' className='h-5 mb-4' /> */}
            <p className='text-[14px]'>
              Subiksha is one of the voluntary organisations, being registered as a non-government organisation (NGO), which has emerged with a group of like-minded individuals, on 8th Oct 2009.
            </p>
          </div>
          <div>
            <h4 className='text-black text-sm font-semibold mb-5'>Company</h4>
            <ul>
              <li><NavLink to='/contact' className='text-[14px] block mb-2'>Contact</NavLink></li>
              <li><NavLink to='/team' className='text-[14px] block mb-2'>Our team</NavLink></li>
              <li><NavLink to='/get-in-touch' className='text-[14px] block mb-2'>Get in Touch</NavLink></li>
              <li><NavLink to='/faq' className='text-[14px] block mb-2'>FAQ</NavLink></li>
              <li><NavLink to='/news' className='text-[14px] block mb-2'>Latest news</NavLink></li>
            </ul>
          </div>
          <div>
            <h4 className='text-black text-sm font-semibold mb-5'>Connect Us</h4>
            <ul>
              <li><NavLink to='#' className='text-[14px] block mb-2'>Instagram</NavLink></li>
              <li><NavLink to='#' className='text-[14px] block mb-2'>LinkedIn</NavLink></li>
              <li><NavLink to='#' className='text-[14px] block mb-2'>YouTube</NavLink></li>
            </ul>
          </div>
          <div>
            <h4 className='text-black text-sm font-semibold mb-5'>Subscribe</h4>
            <ul>
              <li className='text-[14px] mb-2'>
                Subhiksha Voluntary Organization
                <br />
                Mahendra Hills, East Marredpally, Secunderabad -500026,
                <br />
                Hyderabad, Telangana, India
              </li>
              <li className='text-[14px] mb-2'>director@subhiksha.org</li>
              <li className='text-[14px] mb-2'>Office +91- 9908076899</li>
              <li className='text-[14px] mb-2'>Services</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
