import React from "react";
import troll from "../images/troll-face.png";

const Header = () => {
  return (
    <header className="flex items-center h-16 bg-darkPurple text-white p-5">
      <img className="h-full object-cover mr-2" src={troll} alt="logo" />
      <h2 className="text-xl mr-auto">Meme Generator</h2>
      <h4 className="text-xs font-medium">React Course - Project 3</h4>
    </header>
  );
};

export default Header;
