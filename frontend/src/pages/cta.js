import React from "react";
import Link from 'next/link';

function CTA() {
    return(
        <>
        <div className="flex flex-col items-center justify-center mb-24" id="CTA">
            <h1 className="text-lg sm:text-2xl md:text-2xl font-ibm-plex-sans">Still confused. then,</h1>
            <a href=""><h1 className="text-7xl sm:text-9xl md:text-9xl hover:text-violet-700 font-archivo tracking-wide">Let's Talk</h1></a>
            <h1 className="text-lg sm:text-xl md:text-xl font-ibm-plex-sans">or send an email to <Link href="mailto:irvingdubem@gmail.com" target="_blank" className="hover:text-violet-700 font-ibm-plex-sans underline">irvingdubem@gmail.com</Link></h1>
        </div>
        </>
    )
};  

export default CTA;