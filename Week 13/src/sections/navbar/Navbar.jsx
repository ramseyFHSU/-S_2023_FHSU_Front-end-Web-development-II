import React from "react";
import { GiTigerHead } from "react-icons/gi";
import "./navbar.css";
import data from "./data";
import tiger from "../../assets/images/tiger.jpeg";

const Navbar = () => {
  return (
    <nav>
      <div className="container nav__container">
        <button id="nav__icon">
          <GiTigerHead style={{ color: "black", fontSize: "2rem" }} />
        </button>
        <ul className="nav__menu">
          {data.map((item) => (
            <li key={item.id}>
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
        <a href="index.html" className="nav__logo">
          <img src={tiger} alt="Logo" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
