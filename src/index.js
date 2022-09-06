// ------------------------------------------------
// PLEASE DO NOT EDIT. FORK IF YOU NEED TO MODIFY.
// ------------------------------------------------

import React from "react";
import { render } from "react-dom";
import { Header, HeaderName, Theme, Button, Content } from "@carbon/react";

const App = () => (
  <div className="container">
    <Theme theme="g100">
      <Header aria-label="IBM Platform Name">
        <HeaderName href="#" prefix="IBM">
          [Platform]
        </HeaderName>
      </Header>
      <Content>
        <Button onClick={() => console.log("donw")}>Click me</Button>
      </Content>
    </Theme>
  </div>
);

render(<App />, document.getElementById("root"));
