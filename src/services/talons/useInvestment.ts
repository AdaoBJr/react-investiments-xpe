import { useMemo } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { GetInvestments } from 'types/domain';
import { TitleProps } from 'types/shared';

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

  // const investments = useMemo(() => {}, [location.state, id]);

  const compProps = useMemo(
    () => ({
      title: {
        children: title,
        variant: 'h1',
        textAlign: 'center',
        // mb: 1,
      } as TitleProps,
    }),
    [title]
  );

  return { compProps };
};
