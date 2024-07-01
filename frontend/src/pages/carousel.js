import React, { useState } from 'react';

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      imageUrl: '/6278a4453595ee0571accd5b_milad-fakurian-PpgY7sjpf_0-unsplash.webp',
      linkUrl: 'https://www.youtube.com/',
    },
    {
      imageUrl: '/6278a444665242bf69132eff_sebastian-svenson-LpbyDENbQQg-unsplash.webp',
      linkUrl: '/link-to-page-2',
    },
    {
      imageUrl: '/6278a445bfb6d450cebfcc9c_daniele-levis-pelusi-Si_bmG2xo-c-unsplash.webp',
      linkUrl: '/link-to-page-3',
    },
    {
      imageUrl: '/6278a44558ba7cb56d962412_theodore-black-Ltgg9uGi7tE-unsplash.webp',
      linkUrl: '/link-to-page-4',
    }
  ];

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <>
    <div className="max-w-screen-lg mx-auto py-6 px-4 sm:px-6 lg:px-8 mb-20" id='myWork'>
    <h1 className='text-6xl sm:text-8xl md:text-8xl font-light mb-8 font-archivo ml-0 sm:ml-0 md:ml-0 lg:-ml-24'>My Work</h1>
      <div id="controls-carousel" className="relative w-full" data-carousel="static">
        {/* Carousel wrapper */}
        <div className="relative h-56 overflow-hidden rounded-none md:h-96">
          {/* Render all images but only show active one */}
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`duration-700 ease-in-out ${index === activeIndex ? '' : 'hidden'}`}
              data-carousel-item={index === activeIndex ? 'active' : ''}
            >
              <a href={slide.linkUrl} target="_blank" rel="noopener noreferrer">
                <img
                  src={slide.imageUrl}
                  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt={`Carousel Image ${index + 1}`}
                />
              </a>
            </div>
          ))}
        </div>
        {/* Slider controls */}
        <button
          type="button"
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={prevSlide}
          data-carousel-prev
        >
          <span className="inline-flex items-center justify-center w-7 h-10 rounded-full group-focus:outline-none">
          <svg className='' xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#4A5568"><path d="M400-80 0-480l400-400 56 57-343 343 343 343-56 57Z"/></svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={nextSlide}
          data-carousel-next
        >
          <span className="inline-flex items-center justify-center w-7 h-10 rounded-full group-focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#4A5568"><path d="m304-82-56-57 343-343-343-343 56-57 400 400L304-82Z"/></svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </div>
    </>
   
  );
};

export default Carousel;
