import React from "react";
import Link from "next/link";

function Footer() {
    let year = new Date().getFullYear();

    return (
        <>
        <div className="flex flex-col items-center mb-7">
            <h1 className="font-ibm-plex-sans text-lg">Crafted by <Link href="#" className="underline hover:text-violet-700 font-ibm-plex-sans text-lg">DatusAI</Link> &copy; {year}</h1>
        </div>
        </>
    )
};

export default Footer;