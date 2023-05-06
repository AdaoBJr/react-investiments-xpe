import React from 'react';
import { Button, Grid } from '@mui/material';

import { useHome } from 'services/talons';
import { Title, Animation, Text, Dropdown, BodyInvestiments } from 'app/shared';

export const Home: React.FC = () => {
  const {
    data,
    compProps: { loadingAnimation, homeAnimation, title, label, dropdown, button },
  } = useHome();

  if (!data)
    return (
      <BodyInvestiments>
        <Animation {...loadingAnimation} />
      </BodyInvestiments>
    );

  return (
    <BodyInvestiments>
      <Title {...title} />
      <Text {...label} />
      <Animation {...homeAnimation} />
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6}>
          <Dropdown {...dropdown} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button {...button} />
        </Grid>
      </Grid>
    </BodyInvestiments>
  );
};
