import './App.css';
import Textform from './Components/Textform';
import Qrcode1 from './Components/Qrcode1';
import {useState} from 'react';
import { createContext } from 'react';
import ReactSwitch from "react-switch";

export const ThemeContext = createContext(null);

function App() {
  
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <div id={theme}>
    <ThemeContext.Provider  classNmae="full" value={{ theme, toggleTheme }}>
    <div className="container" id={theme}> 
    <div>
    <nav className="navbar navbar-expand-lg navbar-white bg-green"/>
    <div className="container-fluid">
      <a className="navbar-brand" href="/">
      {/* logo img */}
      {/* <img src="piepier_dark_mode.png" width="200" height="120"  border="0px"/>
      <img src="piepier_dark_mode.png" width="200" height="120" /> */}
          <a className="logo">PIEPIER</a>
       <div className="reactswitch">
       <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label>
      <ReactSwitch className="reactswitch" onChange={toggleTheme} checked={theme === "dark"} />
       </div>
        </a>
        </div>
      </div>
      <Qrcode1 id={theme}/>
    <br/>
    <Textform id={theme} />
    <h6>Made with love by VS</h6>
    <br></br>
    </div>
    </ThemeContext.Provider>
    </div>
  );
}
export default App;
