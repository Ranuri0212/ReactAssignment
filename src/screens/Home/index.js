import React from "react";
import "./index.css";

function Home() {
  return (
    <div className="home-hero">
      <div className="columns">
        <div className="column is-6 left-col is fa-align-center ml-6 has-text-white">
          <h1 className="title is-4 has-text-weight-bold has-text-white">
            HI,
            <br />
            I'm Ranuri Dissanayake.
          </h1>
          <h5 className="title is-5 has-text-white">
            · 2 years of experience as a Software Engineering.
            <br />
            · Experience using .NET technologies (C#.NET, ASP.NET Core),
            Microsoft SQL Server, REST API/API Development, Entity Framework,
            and LINQ, frameworks (AngularJS or React preferred), Bootstrap,
            HTML5, CSS.
            <br />
            · Work experience in GIT, Jira project management and bug tracking
            tool.
            <br />· Experience working in an Agile (SCRUM/Kanban) environment
          </h5>
        </div>
        <div className="column is-6">
          <figure>
            <img className="homeimage1" src="images 02.png" />
          </figure>
        </div>
      </div>
      <div className="buttons">
        <button className="button is-link is-rounded">
          See Projects -&gt;
        </button>
        <button className="button is-link is-light">Download Resume </button>
      </div>
    </div>
  );
}

export default Home;
