import React from 'react';
import styled from 'styled-components';
import Box from '@mui/material/Container';

const DivStyle = styled.div`
  display: flex !important;
  justify-content: center !important;
  min-height: 90vh !important;
  align-items: center !important;
  margin-top: 1px !important;
`;

const BoxStyle = styled(Box)`
  height: 90vh !important;
  border-radius: 5px !important;
  padding: 0 !important;
`;

export default function Home() {
  return (
    <DivStyle className="home-div">
      <BoxStyle
        className="home-img"
        component="img"
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
        alt="home"
        src="https://i.ibb.co/mRPLZvF/My-Post-1.png"
        style={{
          boxShadow: '0 0 40px 20px #49FDB1',
          clipPath: 'inset(-15px -45px -15px -45px)',
          marginTop: '18px',
          marginBottom: '8px',
        }}
      />
    </DivStyle>
  );
}
