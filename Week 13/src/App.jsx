import React from "react";
import Navbar from "./sections/navbar/Navbar";
import Header from "./sections/header/Header";
import About from "./sections/about/About";
import Services from "./sections/services/Services";
import Members from "./sections/members/Members";
import FAQs from "./sections/faqs/FAQs";
import Contact from "./sections/contact/Contact";
import Footer from "./sections/footer/Footer";

const App = () => {
  return (
    <>
      <main>
        <Navbar />
        <Header />
        <About />
        <Services />
        <Members />

        <FAQs />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default App;
