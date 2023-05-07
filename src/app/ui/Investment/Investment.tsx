import React from 'react';
import { Box, Divider, Stack } from '@mui/material';

import { Text } from 'app/shared';
import { SxDividerUi } from './styles';
import { BodyInvestiment } from './components';

export const Investment: React.FC = () => {
  const render = [
    { month: 'jan/2020', value: 1000, revenue: '11%' },
    { month: 'fev/2020', value: 2000, revenue: '10%' },
    { month: 'mar/2020', value: -500, revenue: '-8%' },
  ];

  return (
    <BodyInvestiment>
      {render.map((item, i) => (
        <Box key={item.month}>
          <Stack flexDirection={'row'} justifyContent={'space-between'}>
            <Stack flexDirection={'row'} columnGap={1}>
              <Text children={item.month} fontWeight={800} />
              <Text children={item.value} fontWeight={600} />
            </Stack>
            <Text children={item.revenue} fontWeight={600} />
          </Stack>
          {render.length - 1 !== i && (
            <Box mt={0.35}>
              <Divider sx={SxDividerUi} />
            </Box>
          )}
        </Box>
      ))}
    </BodyInvestiment>
  );
};
