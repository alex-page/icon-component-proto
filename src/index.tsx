import { render } from "preact";

import "./style.css";
import { Icon } from "./Icon";

export function App() {
  return (
    <>
      <Icon type="adjust" />
      <Icon type="affiliate" />
      <Icon type="airplane" />
      <Icon type="alert-bubble" />

      <hr />

      <p style={{ color: "hotpink" }}>
        <Icon type="adjust" tone="inherit" />
        <Icon type="affiliate" tone="inherit" />
        <Icon type="airplane" tone="inherit" />
        <Icon type="alert-bubble" tone="inherit" />
      </p>

      <hr />

      <Icon type="adjust" />
      <Icon type="adjust" tone="info" />
      <Icon type="adjust" tone="warning" />
      <Icon type="adjust" tone="caution" />
      <Icon type="adjust" tone="critical" />
      <Icon type="adjust" tone="interactive" />
      <Icon type="adjust" tone="subdued" />
    </>
  );
}

render(<App />, document.getElementById("app"));
