import { FC, PropsWithChildren } from 'react'

import Layout from '@/components/layout/Layout'

import { HeadProvider } from './HeadProvider/HeadProvider'

const MainProvider: FC<PropsWithChildren> = ({ children }) => {
	return (
		<HeadProvider>
			<Layout>{children}</Layout>
		</HeadProvider>
	)
}

export default MainProvider
