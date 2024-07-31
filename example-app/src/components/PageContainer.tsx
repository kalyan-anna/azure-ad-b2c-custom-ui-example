import React, { PropsWithChildren } from 'react';

export const PageContainer: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className='min-h-[500px] container mx-auto py-10'>{children}</div>;
};
