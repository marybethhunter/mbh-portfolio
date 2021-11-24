import React from 'react';
import styled from 'styled-components';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

const ButtonStyle = styled(Button)`
  color: #160033 !important;
  margin-left: 5px !important;
  font-size: 20px !important;
`;

const NavStyle = styled(AppBar)`
  background-color: #ffffff !important;
  margin-bottom: 3px !important;
  align-items: center !important;
`;

export default function NavBar() {
  return (
    <Box>
      <NavStyle position="static" className="nav-style">
        <Toolbar>
          <div>
            <ButtonStyle href="/">Home</ButtonStyle>
            <ButtonStyle href="/about">About</ButtonStyle>
            <ButtonStyle href="/contact">Contact</ButtonStyle>
            <ButtonStyle href="/tech">Technologies</ButtonStyle>
            <ButtonStyle href="/projects">Projects</ButtonStyle>
          </div>
        </Toolbar>
      </NavStyle>
    </Box>
  );
}
