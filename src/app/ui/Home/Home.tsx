import React, { useEffect, useState } from 'react';
import { Grid, Paper } from '@mui/material';

import { GetInvestments } from 'types';
import { useHome } from 'services/talons';
import { useInvestimentsApi } from 'services/infra';
import { Animation, GridContainer, PaperWrapper, Title } from 'app/shared';

export const Home: React.FC = () => {
  const { getInvestiments } = useInvestimentsApi();
  const {
    homeProps: { animationProps, titleProps, labelProps },
  } = useHome();

  const [data, setData] = useState<GetInvestments | null>(null);

  const getInvest = async () => {
    const data = await getInvestiments();
    setData(data);
  };

  useEffect(() => {
    getInvest();
  }, []);

  return (
    <Grid container sx={GridContainer}>
      <Grid item xs={12}>
        <Paper sx={PaperWrapper}>
          {!data ? (
            <Animation {...animationProps} />
          ) : (
            <>
              <Title {...titleProps} />
              <Title {...labelProps} />
            </>
          )}
        </Paper>
      </Grid>
    </Grid>
  );
};
