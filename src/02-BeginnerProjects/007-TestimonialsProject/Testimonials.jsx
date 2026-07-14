import { useState } from "react";
import "./testimonial.css";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // mock testimonials data.
  const testimonialdata = [
    {
      quote: "I love the service!",
      author: "John Jonson",
    },
    {
      quote: "The staff is amazing!",
      author: "Robert Rockson",
    },
    {
      quote: "This is the best product I've ever used!",
      author: "Jane Doe",
    },
    {
      quote: "I highly recommend this product to everyone!",
      author: "John Smith",
    },
  ];

  // onclick functionalities to handle next and previous.
  const handleNextTestimonial = () => {
    setCurrentIndex((currentIndex + 1) % testimonialdata.length);
  };
  const handlePreviousTestimonial = () => {
    setCurrentIndex(
      (currentIndex + testimonialdata.length - 1) % testimonialdata.length,
    );
  };

  return (
    <div className="testimonial-body">
      <div className="testimonials">
        {/* this div is just for the quote part */}
        <div className="testimonials-quote">
          {/* get the quote from the testimonialdata array  */}
          {/* and this will always gives us the first testimonials that is the 0th index  */}
          {testimonialdata[currentIndex].quote}
        </div>

        {/* this div is just for the author part */}
        <div className="testimonials-author">
          - {testimonialdata[currentIndex].author}
        </div>

        {/* now the two buttons to show the testimonals next and previous testimonial part */}
        {/* and onClick event to change the currentIndex so that it will show the updated testimonials in the ui. */}
        <div className="testimonials-nav">
          <button
            onClick={handleNextTestimonial}
            className="testimonial-button"
          >
            Next
          </button>
          <button
            onClick={handlePreviousTestimonial}
            className="testimonial-button"
          >
            Previous
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
