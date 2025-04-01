import Button from "../components/button";
import classes from "./app.module.css";
import "./reset.css";

function App() {
  return (
    <>
      <title>Creators Quest Assets</title>
      <div className={classes.container}>
        <h1>Buttons</h1>
        <div>
          <Button buttonType="primary">Primary</Button>
          <p>Primary button - Normal size - Light theme</p>
        </div>
        <div>
          <Button buttonType="secondary">Secondary</Button>
          <p>Secondary button - Normal size - Light theme</p>
        </div>
      </div>
    </>
  );
}

export default App;
