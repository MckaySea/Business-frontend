import React from "react";
import "./contact.css";
import { useForm, ValidationError } from "@formspree/react";

function Contact() {
  const [state, handleSubmit] = useForm("xgerkwed");

  if (state.succeeded) {
    return (
      <div className="contact">
        <img
          height="100"
          width="100"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Ok_nuvola_green.svg/1024px-Ok_nuvola_green.svg.png"
        />
        <br />
        <p>Thanks for your inquiry! We'll be contacting you shortly.</p>
      </div>
    );
  }
  return (
    <div className="contact">
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email : </label>
        <input
          autoComplete="off"
          id="email"
          type="email"
          name="email"
          required
          placeholder="@example.com"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <br />
        <textarea
          required
          id="message"
          name="message"
          placeholder="Enter your message here"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <br />
        <label htmlFor="phone">Phone Number : </label>
        <input
          autoComplete="off"
          id="phone"
          type="phone"
          name="phone"
          required
          placeholder="559-323-2332"
        />
        <ValidationError prefix="Phone" field="phone" errors={state.errors} />
        <br />
        <button
          style={{ marginLeft: 25 }}
          type="submit"
          disabled={state.submitting}
        >
          Send Message
        </button>
      </form>
      <br />
      <div className="contact_text">
        <p>
          Please explain your general needs and expectations for the project
        </p>
      </div>
    </div>
  );
}

export default Contact;
