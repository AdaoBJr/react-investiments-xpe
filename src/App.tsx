import React, { useEffect } from 'react';
import { Typography } from '@mui/material';

import { useInvestimentsApi } from 'services/infra';

export const App: React.FC = () => {
  const { getInvestiments } = useInvestimentsApi();

  const getInvest = async () => {
    const data = await getInvestiments();
    console.log('data', data);
  };

  useEffect(() => {
    getInvest();
  }, []);
  return <Typography variant="h3">Rodando App</Typography>;
};
