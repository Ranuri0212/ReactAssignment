import React from "react";

function Contact() {
  return (
    <div className="home-hero">
      <div className="columns minu">
        <div className="block">
          <h2 className="title is-2 has-text-link">CONTACT.....</h2>
          <ol className="title is-2 has-text-link">
            <li>
              {" "}
              Contact/WhatsApp :<br />
              <div className="buttons">
                <button className="button is-link is-rounded">
                  0771234567
                </button>
              </div>
            </li>
            <li>
              Email :<br />
              <div className="buttons">
                <button className="button is-link is-rounded">
                  abc@gmail.com
                </button>
              </div>
            </li>
            <li>
              Facebook:
              <br />
              <div className="buttons">
                <button className="button is-link is-rounded">
                  Ranuri Dissanayake
                </button>
              </div>
            </li>
            <li>
              Send a Massege <br />
              <div className="buttons">
                <button className="button is-link is-rounded">send </button>
              </div>
            </li>
          </ol>
        </div>
      </div>
      <img className="rec03" src="Rectangle01.jpg" />
    </div>
  );
}

export default Contact;
