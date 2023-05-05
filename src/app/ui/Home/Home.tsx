import React, { useEffect } from 'react';
import { Typography } from '@mui/material';

import { useInvestimentsApi } from 'services/infra';

export const Home: React.FC = () => {
  const { getInvestiments } = useInvestimentsApi();

  const getInvest = async () => {
    const data = await getInvestiments();
    console.log('data', data);
  };

  useEffect(() => {
    getInvest();
  }, []);
  return <Typography variant="h3">Home</Typography>;
};
