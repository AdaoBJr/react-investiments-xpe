import { useMemo } from 'react';

import { home } from 'articles';
import loading from 'assets/animations/loading.json';
import { AnimationProps, TitleProps } from 'types/shared';

export const useHome = () => {
  const homeProps = useMemo(
    () => ({
      animationProps: {
        animation: loading,
        alt: 'animação-loading',
        center: true,
        width: '300px',
      } as AnimationProps,
      titleProps: {
        children: home.title,
        variant: 'h1',
        textAlign: 'center',
      } as TitleProps,
      labelProps: {
        children: home.subTitle,
        variant: 'body2',
        fontSize: '1rem',
        textAlign: 'center',
      } as TitleProps,
    }),
    []
  );
  return { homeProps };
};
