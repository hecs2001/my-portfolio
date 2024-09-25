import { Link } from "react-scroll";
import "../styles/components.css";

export function NavigationButton(props) {
  const string = props.text;
  return (
    <Link to={props.text} smooth={true}>
      <button className="button">
        {string.charAt(0).toUpperCase() + string.slice(1)}
      </button>
    </Link>
  );
}

export function LinkButton(props) {
  function ImageButton() {
    return (
      <img
        src={props.icon}
        alt={props.text}
        style={{ width: "2.5rem", height: "2.5rem" }}
      />
    );
  }
  function NormalButton() {
    return <>{props.text}</>;
  }
  return (
    <button
      className={
        "button " +
        (props.type === "image"
          ? "img-button"
          : props.type === "normal"
          ? "norm-button"
          : "")
      }
      onClick={() => {
        window.open(props.link, "_blank");
      }}
      rel="noopener noreferer"
    >
      {props.type === "image"
        ? ImageButton()
        : props.type === "normal"
        ? NormalButton()
        : null}
    </button>
  );
}
