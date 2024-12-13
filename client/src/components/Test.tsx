import React from "react";
import {
  FaShip,
  FaRocket,
  FaPhoneAlt,
  FaUndo,
  FaTicketAlt,
} from "react-icons/fa";

const Testimonials: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="testimonials-box space-y-10">
        {/* Testimonial Section */}
        <div className="testimonial">
          <h2 className="title text-2xl font-bold mb-4">Testimonial</h2>
          <div className="testimonial-card bg-white shadow-lg p-6 rounded-md">
            <img
              src="./assets/images/testimonial-1.jpg"
              alt="Alan Doe"
              className="testimonial-banner w-20 h-20 rounded-full object-cover mb-4"
            />
            <p className="testimonial-name text-lg font-semibold">Alan Doe</p>
            <p className="testimonial-title text-gray-500">
              CEO & Founder Invision
            </p>
            <img
              src="./assets/images/icons/quotes.svg"
              alt="quotation"
              className="quotation-img w-6 mt-2"
            />
            <p className="testimonial-desc mt-4 text-gray-600">
              Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor dolor sit
              amet.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="cta-container relative">
          <img
            src="./assets/images/cta-banner.jpg"
            alt="Summer Collection"
            className="cta-banner w-full rounded-lg"
          />
          <a
            href="#"
            className="cta-content absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-30 text-white p-4 text-center"
          >
            <p className="discount text-lg">25% Discount</p>
            <h2 className="cta-title text-3xl font-bold">Summer Collection</h2>
            <p className="cta-text text-lg">Starting @ $10</p>
            <button className="cta-btn mt-4 px-6 py-2 bg-yellow-500 text-black rounded-lg">
              Shop now
            </button>
          </a>
        </div>

        {/* Service Section */}
        <div className="service">
          <h2 className="title text-2xl font-bold mb-4">Our Services</h2>
          <div className="service-container grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <FaShip />,
                title: "Worldwide Delivery",
                desc: "For Order Over $100",
              },
              {
                icon: <FaRocket />,
                title: "Next Day Delivery",
                desc: "UK Orders Only",
              },
              {
                icon: <FaPhoneAlt />,
                title: "Best Online Support",
                desc: "Hours: 8AM - 11PM",
              },
              {
                icon: <FaUndo />,
                title: "Return Policy",
                desc: "Easy & Free Return",
              },
              {
                icon: <FaTicketAlt />,
                title: "30% Money Back",
                desc: "For Order Over $100",
              },
            ].map((service, index) => (
              <a
                href="#"
                key={index}
                className="service-item flex items-center gap-4 p-4 bg-white shadow-md rounded-lg hover:shadow-lg transition"
              >
                <div className="service-icon text-3xl text-yellow-500">
                  {service.icon}
                </div>
                <div className="service-content">
                  <h3 className="service-title font-semibold">
                    {service.title}
                  </h3>
                  <p className="service-desc text-gray-500">{service.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
