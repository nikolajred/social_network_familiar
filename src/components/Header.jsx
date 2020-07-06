import React from 'react';
import './Header.css';
import familiar_logo_300dpi from './../images/familiar_logo_300dpi.png';

const Header = () => {
  return (
    <header className="header">
      <img src={familiar_logo_300dpi}/>
    </header>
  );
};
export default Header;
