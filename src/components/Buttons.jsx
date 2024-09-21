import { HashLink } from "react-router-hash-link/dist/react-router-hash-link.cjs.development";

export function Button(props) {
  return (
    <HashLink to={props.direct} smooth>
      <button className="reg-button">{props.text}</button>
    </HashLink>
  );
}

export function IconButton(props) {
  return (
    <a className="icon-button" href={props.direct}>
      <img src={props.image} alt={props.altText} />
    </a>
  );
}
