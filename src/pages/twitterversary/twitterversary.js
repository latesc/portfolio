import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { forms } from "./data/forms";

forms.forEach((item, i) => {
  item.id = i + 1;
});

function Twitterversary() {
  const [state, setState] = useState({
    title: "",
    heading: "",
    button: "",
    text: "",
    image: "",
  });
  const [generatedLink, setGeneratedLink] = useState(
    "Your link will appear here."
  );
  return (
    <main>
      <h1>
        {/* Twitter Anniversary Generator  */}
        Twitter <span>Anniversary Generator</span>
      </h1>
      <p>
        A W.I.P. web app that lets you create a special Twitter link that opens
        a pop-up with custom parameters. See{" "}
        <a href="#limitations">limitations</a> of the tool.
      </p>

      <section>
        <form>
          <Forms
            state={state}
            setState={setState}
            setGeneratedLink={setGeneratedLink}
          />
        </form>
      </section>
      <section>
        <h3>Link</h3>
        <textarea
          value={generatedLink}
          className="link"
          readOnly="true"
        ></textarea>
      </section>
      <section>
        <h3 id="limitations">Limitations</h3>
        <ul>
          <li>
            <p className="bullet">
              The link only works when it's opened within the app, such as from
              DMs or from tweets.
            </p>
          </li>
          <li>
            <p className="bullet">
              The source of the image links are limited to images copied from
              the Twitter website. You can upload or find an image on the site
              and copy the image link and paste it in the "Tweet Image Link"
              section.
            </p>
          </li>
        </ul>
      </section>
      <Outlet />
    </main>
  );
}

const Forms = (props) => {
  return forms.map((input) => {
    const { label, name, placeholder, value } = input;
    const { state, setState, setGeneratedLink } = props;
    const handleChange = (e) => {
      const value = e.target.value;
      setState({
        ...state,
        [e.target.name]: value,
      });
      setGeneratedLink(
        `https://twitter.com/i/notifications/anniversary?title=${encodeURIComponent(
          state["title"]
        )}&message=${encodeURIComponent(
          state["heading"]
        )}&action=${encodeURIComponent(
          state["button"]
        )}&text=${encodeURIComponent(
          state["text"]
        )}&image_attachment=${encodeURIComponent(state["image"])}`
      );
    };
    return (
      <React.Fragment>
        <label>{label}</label>
        <input
          type="text"
          value={value}
          onChange={(e) => handleChange(e)}
          name={name}
          placeholder={placeholder}
          autoComplete="disabled"
        ></input>
      </React.Fragment>
    );
  });
};

export default Twitterversary;
