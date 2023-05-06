import { ChangeEvent, useEffect, useMemo, useState } from 'react';

import { home } from 'articles';
import { GetInvestments } from 'types/domain';
import { useInvestimentsApi } from 'services/infra';
import loading from 'assets/animations/loading.json';
import {
  AnimationProps,
  TitleProps,
  DropdownProps,
  DropdownItems,
  TextProps,
} from 'types/shared';
import { ButtonProps } from '@mui/material';

export const useHome = () => {
  const { getInvestiments } = useInvestimentsApi();

  const [data, setData] = useState<GetInvestments | null>(null);
  const [dropdownValue, setDropdownValue] = useState<string | null>(null);

  const getInvest = async () => {
    const data = await getInvestiments();
    setData(data);
  };

  const handleSelectOnBlur = ({ target: { value } }: ChangeEvent<HTMLInputElement>) =>
    setDropdownValue(value);

  const dropItems: DropdownItems[] | undefined = useMemo(
    () =>
      data?.investments.map(({ id, description }) => ({
        value: id,
        label: description,
      })),
    [data]
  );

  const compProps = useMemo(
    () => ({
      animation: {
        animation: loading,
        alt: 'animação-loading',
        center: true,
        width: '300px',
      } as AnimationProps,
      title: {
        children: home.title,
        variant: 'h1',
        textAlign: 'center',
      } as TitleProps,
      label: {
        children: home.subTitle,
        variant: 'body2',
        fontSize: '1rem',
        textAlign: 'center',
      } as TextProps,
      dropdown: {
        name: 'dropdown_investiments',
        label: !dropdownValue && home.placeholder,
        fullWidth: true,
        options: dropItems,
        onBlur: handleSelectOnBlur,
      } as DropdownProps,
      button: {
        children: home.button,
        fullWidth: true,
        sx: {
          maxHeight: '40px',

          color: 'common.white',
          fontWeight: 700,
          fontSize: '1rem',
        },
      } as ButtonProps,
    }),
    [dropItems]
  );

  useEffect(() => {
    getInvest();
  }, []);

  return { data, compProps };
};
