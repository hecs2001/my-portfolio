import { useState } from "react";
import { Button, IconButton } from "./Buttons";

export default function Header() {
  return (
    <div className="header">
      <IconButton altText="Logo" />
      <div>
        <Button text="About" direct="#about" />
        <Button text="Projects" direct="#projects" />
        <Button text="Contact" direct="#contact" />
      </div>
    </div>
  );
}
