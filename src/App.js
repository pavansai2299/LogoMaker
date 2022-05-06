import "./App.css";
import "./Logo.css";
import { useState } from "react";

function App() {
  const [logoMsg, setLogoMsg] = useState("");
  const [tagMsg, setTagMsg] = useState("");
  const [clicked, setClicked] = useState(false);

  const logoChangeHandler = (e) => {
    setLogoMsg(e.target.value);
  };

  const tagChangeHandler = (e) => {
    setTagMsg(e.target.value);
  }

  const btnClickHandler = () => {
    if(logoMsg){
      setClicked(!clicked);
    }
    if(!clicked === false){
      setLogoMsg('');
      setTagMsg('');
    }
  }

  return (
    <div className="App">
      <div>
        <input
          type="text"
          className="form-control"
          onChange={logoChangeHandler}
          placeholder="Enter Logo Name"
          value={logoMsg}
        />
         <input
          type="text"
          className="form-control"
          onChange={tagChangeHandler}
          placeholder="Enter Tag Name"
          value={tagMsg}
        />
      </div>
      <button className="generate-button" onClick={btnClickHandler}>{clicked ? "Reset" : "Generate"} </button>
      {logoMsg && clicked &&
      <div className="logo-container">
        <ul>
          <li>
            <div className="logo-holder logo-1">
                <h3>{logoMsg}</h3>
                <p>{tagMsg}</p>
            </div>
          </li>
          <li>
            <div className="logo-holder logo-2">
                <h3>{logoMsg}</h3>
                <p>{tagMsg}</p>
            </div>
          </li>
          <li>
            <div className="logo-holder logo-3">
                <h3>{logoMsg}</h3>
                <p>{tagMsg}</p>
            </div>
          </li>
          <li>
            <div className="logo-holder logo-4">
                <h3>{logoMsg}</h3>
                <p>{tagMsg}</p>
            </div>
          </li>
          <li>
            <div className="logo-holder logo-5">
                <h3>{logoMsg}</h3>
                <p>{tagMsg}</p>
            </div>
          </li>
        </ul>
      </div>
      }
    </div>
  );
}

export default App;
