import React from "react";
import "./index.css";

function AboutMe() {
  return (
    <div className="home-hero">
      <div className="columns minu"></div>
      <div className="columns">
        <div className="column is-two-thirds" id="block">
          <h2 className="title is-2 has-text-link">ABOUT ME....</h2>
          <p className="subtitle is 3 has-text-link">
            I’m Ranuri
            <br />
            Dissanayake
            <br />
            I was born in Colombo ,Sri Lanka.
            <br />
            I’m 21 years old.
            <br />
            I have started my interest in this field from 2019
            <br />
            I’m designer , video editor , web developer and ...
            <br />
            My phone number is 0777123456.
          </p>
          <div className="column is-6">
            <figure>
              <img className="homeimage1" src="images 01.png" />
            </figure>
          </div>
          <div className="column">
            <img className="me" src="me.HEIC" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
