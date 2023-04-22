import React from "react";
import "./header.css";
import tiger from "../../assets/images/tiger.jpeg";

const Header = () => {
  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__profile">
          <img src={tiger} alt="logo" />
        </div>
        <h1>Tiger Club</h1>
        <p>
          The web development club at our university is a vibrant community of
          students who are passionate about all things web development. We meet
          regularly to share our knowledge, work on projects, and collaborate on
          new ideas. Our members come from a variety of backgrounds and skill
          levels, and we have a mix of structured workshops and more free-form
          project work at our meetings. We're focused on hands-on learning and
          giving our members opportunities to work on real projects, whether
          it's building a website for a local business or collaborating on an
          open-source tool. We believe that building a supportive community is
          just as important as building technical skills, so we also have plenty
          of time for networking and socializing. Whether you're an experienced
          developer or just starting out, our club is a welcoming and inclusive
          space where you can learn and grow your skills alongside like-minded
          peers.
        </p>
        <div className="heder__cta">
          <a href="#contact" className="btn primary">
            Contact Us
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
