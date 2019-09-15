/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Dimmer, Loader } from "semantic-ui-react";

const MyLoader = () => {
  const [active, setActive] = useState(true);
  const [text, setText] = useState("loading...");
  return (
    <>
      <Dimmer active={active}>
        <Loader indeterminate>{text}</Loader>
      </Dimmer>
    </>
  );
};

export default MyLoader;
