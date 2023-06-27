import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";


function Hello()  {

  useEffect(() => {
    console.log("hi")
    return ()=> console.log("bi")
  }, [])

  return <h1>Hello</h1>
}

function App() {
  const [showing, setShowing] = useState(false);

  const onShowingClick = () => setShowing((prev) => !prev);

  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onShowingClick}>{showing ? "Hide" : "show"}</button>

    </div>
  );
}

export default App;
