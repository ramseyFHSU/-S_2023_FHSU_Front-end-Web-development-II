import React, { useEffect } from "react";
import "./faqs.css";
import { faqs } from "./data";
import FAQ from "./FAQ";
import AOS from "aos";
import "aos/dist/aos.css";

const FAQs = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });

  return (
    <section id="faqs">
      <h2>Frequently Asked Questions</h2>
      <p>
        Here are some questions we usually get. Click to toggle the answer, and
        if you still have some more questions, shoot us a message from the
        contact section!
      </p>
      <div className="container faqs_container" data-aso="fade-in">
        {faqs.map((item) => (
          <FAQ key={item.id} faq={item} />
        ))}
      </div>
    </section>
  );
};

export default FAQs;
