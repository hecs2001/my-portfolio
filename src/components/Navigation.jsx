import { NavigationButton } from "./Button";
import "../styles/components.css";

export default function MenuButton() {
  return (
    <div className="">
      <div className="">
        <NavigationButton text="home" />
        <NavigationButton text="about" />
        <NavigationButton text="projects" />
        <NavigationButton text="contact" />
      </div>
    </div>
  );
}
