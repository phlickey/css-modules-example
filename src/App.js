import "./red.css";
import scopedCssModule from "./blue.module.css";
import "./green.module.css";

function App() {
  return (
    <div className="App">
      <div className="red">This block is red</div>
      <div className="blue">This block isn't blue</div>
      <div className={scopedCssModule.blue}>This block is blue</div>
      <div className="green">But this block is green</div>
      <pre>{JSON.stringify({ scopedCssModule }, null, 2)}</pre>
    </div>
  );
}

export default App;
