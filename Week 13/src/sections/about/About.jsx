import React from "react";
import { aboutIcons } from "./data";
import "./about.css";
import Card from "../../components/Card";

const About = () => {
  return (
    <section id="about">
      <div className="container about__container">
        <div className="about_right">
          <h2>About Us</h2>
          <div className="about__cards">
            {aboutIcons.map((item) => (
              <Card key={item.id} className="about__card">
                <span className="about__card-icon">{item.icon}</span>
                <h5>{item.title}</h5>
                <p>{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
