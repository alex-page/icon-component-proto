import { render } from "preact";

import "./style.css";
import { Icon } from "./Icon";

export function App() {
  return (
    <p>
      <Icon type="adjust" />
      <Icon type="affiliate" />
      <Icon type="airplane" />
      <Icon type="alert-bubble" />
    </p>
  );
}

render(<App />, document.getElementById("app"));
