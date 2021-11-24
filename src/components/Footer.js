import React from 'react';
import styled from 'styled-components';
import { Navbar, NavLink } from 'reactstrap';
import { signInUser } from '../api/auth';

const DivStyle = styled.div`
  display: flex !important;
  flex-direction: column !important;
  justify-content: center !important;
  align-items: center !important;
`;

const NavbarStyle = styled(Navbar)`
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  bottom: 0 !important;
`;

export default function Footer() {
  return (
    <DivStyle>
      <NavbarStyle
        sx={{
          height: 'auto',
          width: 'auto',
          maxHeight: {
            xs: 300,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
          },
          maxWidth: {
            xs: 350,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
          },
        }}
        className="footer"
        light
      >
        <NavLink className="footer-text" onClick={signInUser}>
          Copyright © Mary Beth Hunter 2021
        </NavLink>
      </NavbarStyle>
    </DivStyle>
  );
}
