import React from 'react';

const testimonials = [
  {
    quote: "The best designer I’ve ever worked with. He redesigned our website and worked on a variety of projects, from iOS apps to advertising designs and he consistently creates top-quality designs which are stunningly smart and beautiful in every detail.",
    name: "Marilyn Monroe",
    title: "Content Writer",
    image: "/WhatsApp Image 2024-05-21 at 22.02.33_b1cface6.jpg", // Placeholder image
  },
  {
    quote: "We’ve been working with David on multiple projects for the last 2 years. He has delivered consistent high quality designs for our web, and apps. He is a great communicator, always meets deadlines and has a great understanding of UX.",
    name: "Dennis Hopper",
    title: "Developer",
    image: "/image-portfolio.jpg", // Placeholder image
  }
];

const Testimonials = () => {
  return (
    <div className="bg-black text-white py-16 mb-28">
      <h2 className="text-3xl sm:text-5xl md:text-5xl font-thin font-archivo text-center mb-8">What do my clients say?</h2>
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="border border-gray-900 rounded-sm p-6 shadow-lg">
            <p className="text-xl font-ibm-plex-sans mb-6 text-left">"{testimonial.quote}"</p>
            <div className="flex items-center">
              <img className="w-12 h-12 rounded-full mr-4" src={testimonial.image} alt={testimonial.name} />
              <div>
                <p className="font-bold">{testimonial.name}</p>
                <p className="text-gray-400">{testimonial.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
