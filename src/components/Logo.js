import React from 'react';
import '../styles/Logo.css';

const Logo = () => {
  return (
    <div className="Logo">
      <img src={`${process.env.PUBLIC_URL}/Images/gfgclg.png`} alt="Logo" />
      {/* <img src="public/Images/Logo.png" alt="Logo" /> */}
    </div>
  );
};

export default Logo;
