import { ReactNode } from 'react';

type NestedLayoutProps = {
  children: ReactNode;
};

const NestedLayout = ({ children }: NestedLayoutProps) => {
  return <div>{children}</div>;
};

export default NestedLayout;
