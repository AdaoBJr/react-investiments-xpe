import React, { PropsWithChildren } from 'react';
import { Box, Paper } from '@mui/material';

import { GridContainer, PaperWrapper } from '../__styles__';

export const BodyInvestiments: React.FC<PropsWithChildren> = ({ children }) => (
  <Box sx={GridContainer}>
    <Paper sx={PaperWrapper}>{children}</Paper>
  </Box>
);
