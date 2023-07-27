"use client";

import { useState } from "react";
import CustomCursor from "../cursor/CustomCursor";
import LogoBand from "./LogoBand";
import NavBtns from "./NavBtns";
import SocialBtns from "./SocialBtns";

function MainNav() {
  const [MouseChangeHovered,setMouseChangeHovered] = useState(false);
  const handleElementHover = () => {
    setMouseChangeHovered(true);
  };

  const handleElementLeave = () => {
    setMouseChangeHovered(false);
  };
  return (
    <>
      <LogoBand handleElementHover={handleElementHover} handleElementLeave={handleElementLeave} />
      <NavBtns  handleElementHover={handleElementHover} handleElementLeave={handleElementLeave} />
      <SocialBtns handleElementHover={handleElementHover} handleElementLeave={handleElementLeave} />
      <CustomCursor MouseChangeHovered={MouseChangeHovered} />
    </>
  );
}

export default MainNav;
