import React, { Children, FC, PropsWithChildren } from 'react'

export const WrapperContent: FC<PropsWithChildren> = ({ children }) => {
	return <div className="w-full max-w-[1260px] m-auto py-12">{children}</div>
}
