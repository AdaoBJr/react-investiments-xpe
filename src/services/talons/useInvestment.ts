import { useMemo } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import dayjs from 'dayjs';

import { invest } from 'articles';
import { TitleProps } from 'types/shared';
import { GetInvestments } from 'types/domain';

interface LocationState {
  state: GetInvestments;
}

interface ParamId {
  [id: string]: string;
}

export const useInvestment = () => {
  const param = useParams<ParamId>();
  const location = useLocation() as LocationState;

  const title = useMemo(
    () =>
      location.state.investments.find((item) => item.id === String(param.id))
        ?.description,
    [location.state, param.id]
  );

  const investments = useMemo(() => {
    const resultsByParamId = location.state.reports
      .filter((item) => item.investmentId === param.id)
      .sort((a, b) => a.month - b.month);

    return resultsByParamId.map(({ month, year, value }, i, array) => {
      const calcRevenue = parseInt(
        `${
          i === 0
            ? 0
            : (((value - array[i - 1].value) / array[i - 1].value) * 100).toPrecision(3)
        }`
      ).toLocaleString('pt-BR', { minimumFractionDigits: 2 });

      return {
        date: dayjs(`${year}-${month}-01`).format('MMM/YYYY'),
        value: `${value.toLocaleString('pt-BR', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}`,
        revenue: parseInt(calcRevenue) <= 0 ? calcRevenue : `+${calcRevenue}`,
        isNegative: parseInt(calcRevenue) < 0,
      };
    });
  }, [location.state, param.id]);

  const totals = useMemo(() => {
    const totalRevenue = investments
      .reduce((acc, curr) => acc + parseInt(curr.revenue), 0)
      .toLocaleString('pt-BR', { minimumFractionDigits: 2 });

    const totalValue = (
      parseFloat(investments[11].value.replace('.', '').replace(',', '.')) -
      parseFloat(investments[0].value.replace('.', '').replace(',', '.'))
    ).toLocaleString('pt-BR', { minimumFractionDigits: 2 });

    const totalRevenueFormatted =
      parseInt(totalRevenue) <= 0 ? totalRevenue : `+${totalRevenue}`;

    const value = `R$ ${totalValue} (${totalRevenueFormatted}%)`;
    const isNegative = parseInt(totalRevenue) <= 0;

    return { value, isNegative };
  }, [investments]);

  const compProps = useMemo(
    () => ({
      title: {
        children: title,
        variant: 'h1',
        textAlign: 'center',
      } as TitleProps,
      subTitle: {
        children: invest.subTitle,
        variant: 'h2',
        textAlign: 'center',
      } as TitleProps,
      totalRevenue: {
        children: totals.value,
        variant: 'h2',
        textAlign: 'center',
        color: totals.isNegative ? 'error.main' : 'success.main',
      } as TitleProps,
    }),
    [title, totals]
  );

  return { investments, compProps };
};
