import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";


function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setkeyword] = useState("");
  const [showing, setShowing] = useState(false);

  const onClick = () => setValue((prev) => prev + 1);
  
  const onChange = (event) => setkeyword(event.target.value);

  const onShowingClick = () => setShowing((prev) => !prev);

  console.log("I run all the time")

  const RunOnlyOnce = () => {
    console.log("I run only once")
  }
  useEffect(RunOnlyOnce, [])

  useEffect(() => {
    if(keyword !== "" && keyword.length > 3){
      console.log("Search for ", keyword);
    }
  }, [keyword])

  return (
    <div>
      <input 
        type="text"
        placeholder="Search hear..." 
        value={keyword}
        onChange={onChange}
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
      <Button  text={"Button"}/>
      <button onClick={onShowingClick}>{showing ? "Hide" : "show"}</button>

    </div>
  );
}

export default App;
