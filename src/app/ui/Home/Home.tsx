import React from 'react';
import { Button, Stack } from '@mui/material';

import { useHome } from 'services/talons';
import { Title, Animation, Text, Dropdown, BodyInvestiments } from 'app/shared';

export const Home: React.FC = () => {
  const {
    data,
    compProps: { animation, title, label, dropdown, button },
  } = useHome();

  if (!data)
    return (
      <BodyInvestiments>
        <Animation {...animation} />
      </BodyInvestiments>
    );

  return (
    <BodyInvestiments>
      <Title {...title} />
      <Text {...label} />
      <Stack flexDirection={'row'} columnGap={1}>
        <Dropdown {...dropdown} />
        <Button {...button} />
      </Stack>
    </BodyInvestiments>
  );
};
