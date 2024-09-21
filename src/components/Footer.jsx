import React from "react";
import { IconButton } from "./Buttons";
import viteImage from "../assets/vite.svg";
import reactLogo from "../assets/react.svg";

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-languages">
                <p>Made in</p>
                <IconButton direct="https://vitejs.dev" image={viteImage} altText="Vite Logo" />
                <IconButton direct="https://react.dev" image={reactLogo} altText="React Logo" />
            </div>
            <div className="footer-copyright">
                <p>Hecs &copy; {new Date().getFullYear()}</p>
                <p>All Rights Reserved</p>
            </div>
        </div>
    )
}