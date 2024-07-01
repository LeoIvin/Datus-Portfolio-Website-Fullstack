import React from 'react';

const AboutMe = () => {
  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center">
      <div className="max-w-4xl px-4 py-8">
      <h1 className="text-4xl sm:text-8xl md:text-8xl font-light mb-8 font-archivo ml-0 sm:ml-0 md:ml-0 lg:-ml-32" id='about'>About me</h1>
        <p className="text-base sm:text-xl md:text-xl font-ibm-plex-sans" id='aboutText'>
          I am an award-winning designer specialized in UX/UI. Where I have been
          working as a freelancer for about 7 years. I work from the user experience
          to the visual details of your product or a website. I am a minimal designer
          and I really like the simple and elegant designs. I worked with a range of
          clients focusing on websites, web apps and more.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
