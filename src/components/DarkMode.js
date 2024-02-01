import React, { useState } from "react";
import '../styles/DarkMode.css';
import { ReactComponent as Sun } from "./Sun.svg";
import { ReactComponent as Moon } from "./Moon.svg";

const DarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <div className={`dark_mode ${isDarkMode ? 'dark' : ''}`}>
        <input
          className='dark_mode_input'
          type='checkbox'
          id='darkmode-toggle'
          checked={isDarkMode}
          onChange={toggleDarkMode}
        />
        <label className='dark_mode_label' htmlFor='darkmode-toggle'>
          <Sun />
          <Moon />
        </label>
      </div>
      <body className={isDarkMode ? 'dark' : ''}>
        {/* rest of your code */}
      </body>
    </>
  );
};

export default DarkMode;



