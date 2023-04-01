import React, { FC, PropsWithChildren } from 'react';

export const WrapperContent: FC<PropsWithChildren> = ({ children }) => (
	<div className='m-auto w-full max-w-[1260px] py-12'>{children}</div>
);
