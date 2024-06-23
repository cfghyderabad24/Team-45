import React from "react";
import heroImg from "./images/main.jpg";
import heroImgback from "./images/hero-shape-purple.png";
import { FiSearch } from "react-icons/fi";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { FaGraduationCap, FaUsers } from "react-icons/fa";
import aboutImg from "./images/about.jpg";
import imgs from "./images/join1.png";
import { AiOutlineCheck } from "react-icons/ai";
import { GiEvilBook, GiWorld } from "react-icons/gi";
import imgs1 from "./images/award1.jpg";
import imgs2 from "./images/award2.jpg";

export const Home = () => {
  return (
    <>
      <HomeContent />
      <About />
      <br />
      <br />
      <br />
      <Instructor />
    </>
  );
};

const HomeContent = () => {
  return (
    <>
      <section className='bg-secondary py-10 h-[92vh] md:h-full'>
        <div className='container'>
          <div className='flex items-center justify-center md:flex-col'>
            <div className='left w-1/2 text-black md:w-full'>
              <h1 className='text-4xl leading-tight text-black font-semibold'>
                Subhiksha Voluntary <br />Organization.<br />
              </h1>
              <h3 className='text-lg mt-3'>Because We Care..!!</h3>
              <span className='text-[14px]'>Empowering dreams through education and joy.</span>

              <div className='relative text-gray-600 focus-within:text-gray-400 mt-5'>
                <input type='search' className='py-3 text-sm  bg-white rounded-md pl-10 focus:outline-none ' placeholder='Search...' autoComplete='off' />
                <span className='absolute inset-y-0 left-0 flex items-center pl-2'>
                  <button type='submit' className='p-1 focus:outline-none focus:shadow-outline'>
                    <FiSearch />
                  </button>
                </span>
              </div> 
              <span className='text-[14px]'>You`re guaranteed to find something that`s right for you.</span>
            </div>
            <div className='right w-1/2 md:w-full relative'>
              <div className='images relative'>
                <img src={heroImgback} alt='' className=' absolute top-32 left-10 w-96 md:left-10' />
                <div className='img h-[85vh] w-full'>
                  <img src={heroImg} alt='' className='h-full w-full object-contain z-20 relative' />
                </div>
              </div>
              <div className='content'>
                <button className='bg-white shadow-md absolute top-56 left-0 z-30 p-2 flex items-center rounded-md'>
                  <div className='icon w-10 h-10 text-white rounded-full flex items-center justify-center bg-orange-400'>
                    <BsFillLightningChargeFill size={25} />
                  </div>
                </button>
                <button className='bg-white shadow-md absolute bottom-32 left-48 z-30 p-2 flex items-center rounded-md pr-8'>
                  <div className='icon w-10 h-10 text-white rounded-full flex items-center justify-center bg-blue-400'>
                    <FaGraduationCap size={25} />
                  </div>
                </button>
                <button className='bg-white shadow-md absolute top-56 -right-32 z-30 p-2  md:top-96 md:-right-5 flex items-center rounded-md'>
                  <div className='icon w-10 h-10 text-white rounded-full flex items-center justify-center bg-orange-400'>
                    <FaUsers size={25} />
                  </div>
                  <div className='text flex flex-col items-start px-4'>
                    <span className='text-sm text-black'>User Experience Class</span>
                    <span className='text-[12px]'>Tomorrow is our</span>
                  </div>
                </button>
                <button className='bg-white shadow-md absolute top-32 right-32 z-30 p-2 flex items-center rounded-md'>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const About = () => {
  return (
    <>
      <section className="about py-16">
        <div className="container mx-auto px-4">
          <div className="heading text-center py-12">
            <h1 className="text-4xl font-semibold text-black">
              Our Services for the Differently Abled
            </h1>
            <span className="text-base mt-2 block">
              You don't have to struggle alone, you've got our assistance and help.
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-5">
            <AboutCard
              color="bg-[#2D69F0]"
              title="Physiotherapy"
              desc="Physiotherapy treats physical impairments to restore movement and function."
            />
            <AboutCard
              color="bg-[#DD246E]"
              title="Occupational Therapy"
              desc="Occupational therapy helps individuals develop, recover, or maintain daily living and work skills."
            />
            <AboutCard
              color="bg-[#8007E6]"
              title="Speech Therapy & Language Training"
              desc="Speech therapy improves communication and swallowing skills."
            />
            <AboutCard
              color="bg-[#0CAE74]"
              title="Vocational Learning"
              desc="Vocational learning equips individuals with job-specific skills and training."
            />
            <AboutCard
              color="bg-[#FF914D]"
              title="Distance Learning"
              desc="Distance learning facilitates remote education through digital platforms and online resources."
            />
            <AboutCard
              color="bg-[#FF4D4D]"
              title="Inclusive Education"
              desc="Inclusive education ensures that every student, regardless of differences, receives quality education."
            />
          </div>
        </div>
      </section>
      <AboutContent />
    </>
  );
};

const AboutCard = (props) => {
  return (
    <div
      className={`box shadow-md p-6 rounded-md text-white ${props.color} cursor-pointer transition ease-in-out delay-150 hover:-translate-y-4 duration-300`}
    >
      <div className="text mt-5">
        <h4 className="text-lg font-semibold my-3">{props.title}</h4>
        <p className="text-base">{props.desc}</p>
      </div>
    </div>
  );
};

const AboutContent = () => {
  return (
    <section className="mb-16">
      <div className="container mx-auto px-4 flex flex-wrap md:flex-col">
        <div className="left w-full lg:w-1/3 md:w-full relative lg:pr-8 mb-8 lg:mb-0">
          <img src={aboutImg} alt="aboutImg" className="rounded-xl w-full" />
          <div className="img-group ml-24 mt-3">
            <img src={imgs} alt="" />
            <span className="text-base">
              Join over <label className="text-black text-lg">Many happy</label> students
            </span>
          </div>
        </div>
        <div className="right w-full lg:w-2/3 md:w-full lg:pl-8 md:mt-16">
          <div className="heading w-full">
            <h1 className="text-3xl font-semibold text-black">Subhikhsha Voluntary Organization</h1>
            <span className="text-base mt-2 block leading-6">
              Established in 9, Subhiksha is an initiative started by a group of trained social workers striving for an inclusive society that provides equal opportunities for all by enhancing the quality of life of individuals with disabilities. The founder and current chairperson, Mr. Pondi Kishore Kumar, spearheaded this group. Subhiksha reaches out to individuals with various disabilities, including:
            </span>
            <ul className="my-5">
              <li className="text-base flex items-center gap-3 my-2">
                <AiOutlineCheck className="text-green-500" /> Autism Spectrum Disorder
              </li>
              <li className="text-base flex items-center gap-3 my-2">
                <AiOutlineCheck className="text-green-500" /> Cerebral Palsy
              </li>
              <li className="text-base flex items-center gap-3 my-2">
                <AiOutlineCheck className="text-green-500" /> Multiple Disabilities
              </li>
              <li className="text-base flex items-center gap-3 my-2">
                <AiOutlineCheck className="text-green-500" /> Hearing Impaired
              </li>
              <li className="text-base flex items-center gap-3 my-2">
                <AiOutlineCheck className="text-green-500" /> Physically Challenged
              </li>
              <li className="text-base flex items-center gap-3 my-2">
                <AiOutlineCheck className="text-green-500" /> Mental Illness
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const Instructor = () => {
  return (
    <>
      <section className="instructor mb-16">
        <div className="container">
          <div className="heading py-12 text-center w-2/3 m-auto md:w-full">
            <h1 className="text-3xl font-semibold text-black">Our Achievements</h1>
            <span className="text-[14px] mt-2 block"></span>
          </div>
          <div className="content grid grid-cols-2 gap-5 md:grid-cols-1">
            <img
              src={imgs1}
              alt=""
              className="rounded-t-lg object-cover w-full h-72"
            />
            <img
              src={imgs2}
              alt=""
              className="rounded-t-lg object-cover w-full h-72 relative"
            />
          </div>
          <div className="content">
            <div className="heading py-12 text-center w-2/3 m-auto md:w-full">
              <h1 className="text-3xl font-semibold text-black">We Are Proud</h1>
              <span className="text-[14px] mt-2 block">
                you've got our assistance and help.
              </span>
            </div>
            <div className="content grid grid-cols-4 gap-5 md:grid-cols-2">
              <InstructorCard
                color="text-red-500"
                icon={<FaUsers size={40} />}
                title="63"
                desc="Students Enrolled"
              />
              <InstructorCard
                color="text-orange-500"
                icon={<GiEvilBook size={40} />}
                title="20"
                desc="Total Courses"
              />
              <InstructorCard
                color="text-purple-500"
                icon={<FaGraduationCap size={40} />}
                title="4"
                desc="Online Learners"
              />
              <InstructorCard
                color="text-indigo-500"
                icon={<GiWorld size={40} />}
                title="4"
                desc="Online Learners"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const InstructorCard = (props) => {
  return (
    <div className={`box p-5 py-5 rounded-md`}>
      <div className={`${props.color}`}>{props.icon}</div>
      <div className="text mt-2">
        <h4 className="text-lg font-semibold text-black">{props.title}</h4>
        <p className="text-[15px]">{props.desc}</p>
      </div>
    </div>
  );
};

export default Home;
