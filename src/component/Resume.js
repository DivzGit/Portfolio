import React from 'react';
import ResumeImg from '../assets/images/developer-removebg.png';
import ResumeFile from '../assets/files/resume.pdf';

const Resume = () => {
  return (
    <section className='flex flex-col md:flex-row px-5 md:h-[100vh] py-32 justify-center'>
      <div className="flex justify-center md:justify-start md:w-1/2">
        <img className="md:w-2/3" src={ResumeImg} alt="Developer" />
      </div>
      <div className="flex flex-col justify-center items-center md:items-start md:w-1/2">
        <h1 className="text-3xl font-bold mb-4">Resume</h1>
        <p className="text-lg">
          You can view my resume <a href={ResumeFile} download className="text-blue-500 underline">here</a>
        </p>
      </div>
    </section>
  );
}

export default Resume;
