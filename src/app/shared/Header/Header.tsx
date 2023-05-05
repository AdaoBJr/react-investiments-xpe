import React from 'react';
import { Box } from '@mui/material';
import { Image } from '../Image';
import { Title } from '../Title';

import { BoxContainer } from './styles';
import logo from 'assets/icons/logo.svg';

export const Header: React.FC = () => (
  <Box sx={BoxContainer}>
    <Box
      role="button"
      onClick={() => window.location.reload()}
      sx={{ cursor: 'pointer' }}
    >
      <Image
        src={logo}
        alt="logo-header"
        sx={{ width: '50px', marginLeft: { xs: 1, sm: 0 } }}
      />
    </Box>
    <Title variant="h1" color="text.primary" alignSelf={'center'}>
      React Investimentos - XPe
    </Title>
  </Box>
);
