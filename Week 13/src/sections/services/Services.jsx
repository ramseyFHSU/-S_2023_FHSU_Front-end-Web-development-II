import React from "react";
import "./services.css";
import { servicesIcons } from "./data";
import Card from "../../components/Card";

const Services = () => {
  return (
    <section id="services">
      <h2>Services</h2>
      <p>
        At the web development club, we offer a variety of services to help
        bring your web and mobile application ideas to life. We specialize in
        developing servers, full stack websites, and mobile applications that
        are tailored to your specific needs. Our team of skilled developers
        works with you every step of the way to ensure that your project is a
        success. Whether you need a website for your business or a mobile
        application for your startup, we've got you covered. Our services are
        affordable and high-quality, and we pride ourselves on delivering
        projects on time and on budget. Contact us today to learn more about how
        we can help you achieve your web and mobile development goals.
      </p>
      <div className="container services__container" data-aos="fade-up">
        {servicesIcons.map((item) => (
          <Card key={item.id} className="service light">
            <div className="service__icon">{item.icon}</div>
            <div className="service__details">
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Services;
