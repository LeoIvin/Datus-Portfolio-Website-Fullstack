import React from "react";

function MainSection() {
  function scrollToSection(sectionId) {
    setTimeout(() => {
      document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    }, 120); // Delay in milliseconds
  }


  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen text-white">
      <header className="absolute top-0 left-0 flex items-center justify-between w-full p-4">
        <div className="text-xl sm:text-3xl font-bold font-ibm-plex-sans ml-8">DATUS.</div>
        <button onClick={() => scrollToSection('CTA')} className="bg-work-tg text-white rounded-full px-4 py-2 font-ibm-plex-sans text-sm sm:text-lg mr-8">
            <a href="#">Let's work together</a>
        </button>
      </header>
      <main className="flex flex-col items-center justify-center flex-1">
      <div className="relative z-10 text-center">
    <h1 className="text-7xl sm:text-7xl md:text-9xl font-light font-archivo tracking-wide">IRVING</h1>
    <h1 className="text-7xl sm:text-7xl md:text-9xl font-light font-archivo tracking-wide">AMAECHI</h1>
</div>

       {/*  <div className="absolute inset-0 flex items-center justify-center">
          <img src="/image-portfolio.jpg" alt="" className="object-cover w-96 h-96 rounded-full" />        
        </div> */}
      </main>
      <footer className="absolute bottom-0 flex flex-row items-center p-4 space-x-1">
        <button onClick={() => scrollToSection('myWork')}><MouseIcon className="w-6 h-6 mb-2" /></button>
        <p className="text-xs font-ibm-plex-sans mb-2">Scroll Down</p>
      </footer>
    </div>
  )
}

export default MainSection;


function MouseIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="5" y="2" width="14" height="20" rx="7" />
      <path d="M12 6v4" />
    </svg>
  )
}