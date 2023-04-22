import React from "react";
import "./contact.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { contactIcons } from "./data";

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },

    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().required("Email is required"),
      message: Yup.string().required("Message is required"),
    }),

    onSubmit: (values) => {
      console.log(values);
      formik.resetForm();
    },
  });

  return (
    <section id="contact">
      <h2>Get in Touch</h2>
      <p>Shoot us a message!</p>
      <div className="contact__form">
        <form onSubmit={formik.handleSubmit}>
          <div className="inputBox">
            <div className="input_row">
              <label
                htmlFor="name"
                className={`label ${
                  formik.errors.name && formik.touched.name ? "error" : ""
                }`}
              >
                {formik.errors.name ? formik.errors.name : "Name"}
              </label>
              <input
                type="text"
                className="input"
                name="name"
                placeholder="Please enter your name"
                onChange={formik.handleChange}
                value={formik.values.name}
              />
            </div>
            <div className="input_row">
              <label
                htmlFor="email"
                className={`label ${
                  formik.errors.email && formik.touched.email ? "error" : ""
                }`}
              >
                {formik.errors.email ? formik.errors.email : "Email"}
              </label>
              <input
                type="email"
                className="input"
                name="email"
                placeholder="Email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
            </div>
            <div className="input_row">
              <label htmlFor="message" className="label">
                Message
              </label>
              <textarea
                type="text"
                className="input"
                name="message"
                placeholder="Enter your message"
                onChange={formik.handleChange}
                value={formik.values.message}
              />
            </div>
          </div>
          <div>
            <button type="submit" className="btn">
              Send
            </button>
          </div>
        </form>
      </div>

      <div className="container contact__container" data-aos="fade-up">
        {contactIcons.map((contact) => (
          <a
            key={contact.id}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {contact.icon}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
