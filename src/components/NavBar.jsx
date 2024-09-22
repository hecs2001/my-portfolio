import { Link } from 'react-scroll';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function Header() {
  return (
    <div className="header">
      <img alt="Logo" />
      <Stack direction="row" spacing={2}>
        <Link to='home' smooth={true}><Button>Home</Button></Link>
        <Link to='about' smooth={true}><Button>About</Button></Link>
        <Link to='projects' smooth={true}><Button>Projects</Button></Link>
        <Link to='contact' smooth={true}><Button>Contact</Button></Link>
      </Stack>
    </div>
  );
}
