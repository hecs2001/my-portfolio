import React from "react";
import { Stack, IconButton } from '@mui/material';
import viteImage from "../assets/vite.svg";
import reactLogo from "../assets/react.svg";
import muiLogo from "../assets/mui.svg";

export default function Footer() {
    return (
        <div className="footer">
            <Stack direction="row" spacing={1}>
                <IconButton href="https://vitejs.dev" target="_blank" rel="noopener noreferrer"><img src={viteImage}/></IconButton>
                <IconButton href="https://react.dev" target="_blank" rel="noopener noreferrer"><img src={reactLogo}/></IconButton>
                <IconButton href="https://mui.com/" target="_blank" rel="noopener noreferrer"><img src={muiLogo}/></IconButton>
            </Stack>
            <div className="footer-text">
                <p>Hecs &copy; {new Date().getFullYear()}</p>
                <p>All Rights Reserved</p>
            </div>
        </div>
    )
}