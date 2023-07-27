import React from 'react'

const Resume = () => {
  return (
    <div className=' w-full py-4 mt-10 ' >
      <h1 className='text-[20px] md:text-[40px] mx-28  font-[700] text-fuchsia-400'>Resume</h1>

      <div className="max-w-[1300px] mx-auto  py-[50px] md:flex justify-between">
        <div className='m-2  '>
          <h1 className='text-[20px] md:text-[26px]  font-[500]'>Work Experience</h1>
        </div>

        <div className='m-2  '>
          <div>
            <span>Dec 2022 - May 2023 &nbsp;<span className='text-[16px] font-bold'>React Native Developer</span></span>
            <p>Created mobile applications based on React.<br />Designed customized solutions for proposals,<br />to potential customers.</p>
          </div>
          {/* 2nd Experience */}
          <div className='mt-[40px]'>
            <span>Mar 2022 - Sep 2022  &nbsp;<span className='text-[16px] font-bold'>React Js Developer</span></span>
            <p>Designed REST calls using React to streamline<br />user interface performance Designed intuitive<br />graphical user interfaces to improve user experience.
            </p>
          </div>
          {/* 3rd Experience */}
          <div className='mt-[40px]'>
            <span>Aug 2021 - Jan 2022  &nbsp;<span className='text-[16px] font-bold'>Front-End Web Developer </span></span>
            <p>Worked cooperatively with client services, sales and<br />design team in deadline-driven environment.
              Coded using<br/>HTML, CSS and JavaScript to develop website. Using third<br/>party software(leadspedia) to store web
              form data. </p>
          </div>
          </div>
      </div>
      {/* Skill set */}
      <div className="max-w-[1300px] mx-auto   md:flex justify-between">
        <div className='m-2  '>
          <h1 className='text-[20px] md:text-[26px]  font-[500]'>Skill</h1>
        </div>
         <div className='  mb-5 '>
            <ul className='flex'>
              <li>React-js, </li>
              <li>Html,</li>
              <li>Css,</li>
              <li>JavaScript,</li>
              <li>React native, </li>
              <li>Tailwindcss,</li>
              <li>Node-js</li>
              

            </ul>
          </div>
         </div>
         {/* Education  */}

         <div className="max-w-[1300px] mx-auto   md:flex justify-between">
        <div className='m-2  '>
          <h1 className='text-[20px] md:text-[26px]  font-[500]'>Education</h1>
        </div>
        <div className=' ml-2 '>
        <span className='font-bold '>2016 - 2022 <br/><span className='text-[16px] font-bold'>Federal Urdu University Of Arts,Science And Technology</span></span>
            <h1 className='text-[16px] font-bold underline'>Major</h1>

            <p>Web Development</p>
            <p>Databases</p>
            <p>Software Qulatiy Assurance</p>
            <p>Java&C++</p>
            </div>
         </div>
      
    </div>
  )
}

export default Resume