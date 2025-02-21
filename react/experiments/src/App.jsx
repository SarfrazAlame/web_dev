import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div>
      <HeaderWithButton />
      <Header title={"Sarfraz2"} />
      <Header title={"Sarfraz2"} />
      <Header title={"Sarfraz2"} />
    </div>
  );
}

function HeaderWithButton() {
  const [status, setStatus] = useState("my name is Sarfraz");
  function handleClick() {
    setStatus("my name is " + Math.random());
  }
  return (
    <div>
      <button onClick={handleClick}>click</button>
      <Header title={status} />
    </div>
  );
}

function Header({ title }) {
  return <div>{title}</div>;
}
export default App;
