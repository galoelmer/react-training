// eslint-disable-next-line
import React, { Component, useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

// class ToggleContext extends Component {
//     static contextType = ThemeContext;
//     render() {
//         const {toggleTheme} = this.context;
//         return(
//             <button onClick={toggleTheme}>Toggle Theme</button>
//         )
//     }
// }

// Functional componet using useContext hook
const ToggleContext = () => {
  const { toggleTheme } = useContext(ThemeContext);
  return <button onClick={toggleTheme}>Toggle Theme</button>;
};

export default ToggleContext;
