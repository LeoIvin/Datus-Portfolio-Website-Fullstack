import React, { useState } from "react";
import Link from 'next/link';
import Form from './form';  
function CTA() {
  const [showForm, setShowForm] = useState(false);

  const handleToggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center mb-24" id="CTA">
        <h1 className="text-lg sm:text-2xl md:text-2xl font-ibm-plex-sans">Still confused. then,</h1>
        <h1 
          className="text-7xl sm:text-9xl md:text-9xl hover:text-violet-700 font-archivo tracking-wide cursor-pointer transition-colors duration-300" 
          onClick={handleToggleForm}
          style={{ color: showForm ? '#8b5cf6' : 'inherit' }} 
        >
          Let's Talk
        </h1>
        <h1 className="text-lg sm:text-xl md:text-xl font-ibm-plex-sans">
          or send an email to <Link href="mailto:irvingdubem@gmail.com" target="_blank" className="hover:text-violet-700 font-ibm-plex-sans underline">irvingdubem@gmail.com</Link>
        </h1>
      </div>
      <div className={`transition-opacity duration-300 ${showForm ? 'opacity-100' : 'opacity-0 hidden'}`}>
        <Form setShowForm={setShowForm} />
      </div>
    </>
  )
};

export default CTA;
