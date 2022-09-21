import React from "react";
import "./Home.css";
import { useForm, ValidationError } from "@formspree/react";

function Home() {
  const [state, handleSubmit] = useForm("xgerkwed");

  if (state.succeeded) {
    return (
      <div className="contact">
        <img
          height="100"
          width="100"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Emoji_u263a.svg/1200px-Emoji_u263a.svg.png"
          alt="smiling-emoji"
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
          autofill="off"
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
        <button type="submit" disabled={state.submitting}>
          Send Message
        </button>
      </form>
      <br />
      <div className="contact_text">
        <p>
          This is a prototype website made as a project by Ashish Nallana&nbsp;
          <a href="https://www.instagram.com/ashish.builds.web/">
            @ashish.builds.web
          </a>
        </p>
        <p>
          Note : The above form reaches to Ashish Nallana not to !rideontrek.com
        </p>
      </div>
    </div>
  );
}

export default Home;
