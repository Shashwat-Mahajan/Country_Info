import React from "react";

const Contact = () => {

  const handleSubmit = (formdata) => {
    const formInputData = Object.fromEntries(formdata.entries());
  }


  return (
    <section className="section-contact">
      <h1 className="container-title">Contact Us</h1>
      <div className="contact-wrapper container">
        <form action={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            required
            autoComplete="false"
            name="username"
            className="form-control"
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            autoComplete="false"
            name="email"
            className="form-control"
          />
          <textarea
            placeholder="Your Message"
            required
            autoComplete="false"
            name="message"
            className="form-control"
          ></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
