import { TypeAnimation } from "react-type-animation";
import { Stack, IconButton, Button } from "@mui/material";
import { Input } from "@mui/joy";
import FileOpenOutlinedIcon from "@mui/icons-material/FileOpenOutlined";
import PersonIcon from "@mui/icons-material/Person";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import TextFieldsIcon from "@mui/icons-material/TextFields";
import instagramIcon from "../assets/instagram.svg";
import linkedinIcon from "../assets/linkedin.svg";
import githubIcon from "../assets/github.svg";

export function Home() {
  return (
    <div id="home" className="container">
      <h1>Hello, I'm Hecs</h1>
      <TypeAnimation
        sequence={["A Programmer", 1500, "A Fullstack Web Developer", 3000]}
        wrapper="p"
        speed={10}
        style={{ fontFamily: "var(--mono-font)" }}
        repeat={Infinity}
      />
    </div>
  );
}

export function About() {
  return (
    <div id="about" className="container">
      <div className="about-title">
        <h1>About</h1>
        <Button
          variant="outlined"
          endIcon={<FileOpenOutlinedIcon />}
          href="https://www.canva.com/design/DAGN1tAikM0/sJnAIXeHK194zLqa3lxhSQ/edit?utm_content=DAGN1tAikM0&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Resume
        </Button>
      </div>
      <div className="about-details">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <h2>Experience</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <h2>Skills</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <h2>Programming</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <div id="projects" className="container">
      <h1>Projects</h1>
    </div>
  );
}

export function Contact() {
  return (
    <div id="contact" className="container">
      <div className="contact-title">
        <h1>Contact</h1>
        <Stack
          direction="row"
          spacing={1}
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <IconButton
            href="https://www.linkedin.com/in/hecs"
            target="_blank"
          >
            <img src={linkedinIcon} />
          </IconButton>
          <IconButton
            href="https://github.com/hecs2001"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={githubIcon} />
          </IconButton>
          <IconButton
            href="https://www.instagram.com/art.hecs/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagramIcon} />
          </IconButton>
        </Stack>
      </div>
      <div className="contact-inputs">
        <Stack
          direction="column"
          spacing={2}
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Input
            startDecorator={<PersonIcon />}
            color="neutral"
            disabled={false}
            size="md"
            variant="plain"
          />
          <Input
            startDecorator={<AlternateEmailIcon />}
            color="neutral"
            disabled={false}
            size="md"
            variant="plain"
          />
          <Input
            startDecorator={<TextFieldsIcon />}
            color="neutral"
            disabled={false}
            size="md"
            variant="plain"
          />
        </Stack>
      </div>
    </div>
  );
}
