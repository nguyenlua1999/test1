import logo from "./logo.svg";
import "./App.css";
import { Button } from "antd";
import { Checkbox } from "antd";
function App() {
  return (
    <div>
      <div className="backimg">
        <div className="header">
          <div className="antdesign">AntDesign</div>
          <div>
            <input type="text" />
          </div>
          <div>
            <button>Design</button>
            <button>Doc</button>
            <button>Compponent</button>
            <button>Resource</button>
          </div>
        </div>
        <div className="body">Antdesign</div>
        <p style={{ fontSize: "12px", width: "100%", textAlign: "center" }}>
          A design system for enterprise-level products. Create an efficient and
          enjoyable work experience.
        </p>
        <div style={{ textAlign: "center" }}>
          <button
            style={{
              color: "white",
              backgroundColor: "blue",
              border: "1px solid blue",
              borderRadius: "20px",
              width: "200px",
              height: "45px",
              marginRight: "20px",
            }}
          >
            Getting Stated
          </button>
          <button
            style={{
              color: "blue",
              backgroundColor: "white",
              border: "1px solid blue",
              borderRadius: "20px",
              width: "200px",
              height: "45px",
            }}
          >
            Design Language{" "}
          </button>
        </div>
      </div>
      <Button>123123123</Button>
      <Checkbox>nude</Checkbox>
    </div>
  );
}

export default App;
