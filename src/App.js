import React from "react";
import { socmeds } from "./socmeds";
import { projects } from "./projects";

function App() {
  return (
    <main>
      <header>
        <h1>
          Hi, I'm <span>Luis Escarrilla</span> 👋
        </h1>
      </header>
      <section id="about">
        <h2>About Me</h2>
        <p>
          I'm a student based in the Philippines doing video editing and
          front-end development work who aims to make entertaining content.
        </p>
      </section>
      <section id="projects">
        <h2>Projects</h2>
        <ul>
          <Projects />
        </ul>
      </section>
      <section id="contact">
        <h2>Contact</h2>
        <a href="ma&#105;&#108;to&#58;luis&#64;l&#37;61t&#101;sc%2Ec&#111;%6D">
          <img
            src="assets/mail.svg"
            alt="Send an email to ma&#105;&#108;to&#58;luis&#64;l&#37;61t&#101;sc%2Ec&#111;%6D"
          />{" "}
          <span>lu&#105;s&#64;&#108;at&#101;sc&#46;co&#109;</span>
        </a>
      </section>
      <section id="socials">
        <h2>Socials</h2>
        <Socials />
      </section>
      <footer>
        Copyright © 2022 Luis Escarrilla. All Rights Reserved. This website
        doesn't use cookies.
      </footer>
    </main>
  );
}

const Projects = () => {
  return projects.map((project) => {
    const { id, title, description, link } = project;
    return (
      <li key={id}>
        <a href={link} target="_blank" rel="noreferrer">
          <span>{title}</span>
        </a>
        <p>{description}</p>
      </li>
    );
  });
};

const Socials = () => {
  return socmeds.map((socmed) => {
    const { id, name, site, link, logo } = socmed;
    return (
      <a key={id} href={link} target="_blank" rel="noreferrer">
        <img src={logo} alt={"Link to " + site} /> <span>{name}</span>
      </a>
    );
  });
};

export default App;
