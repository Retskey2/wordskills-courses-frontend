import { FC, PropsWithChildren } from 'react'

import Footer from './Footer/Footer'
import Header from './Header/Header'
import { HeaderContent } from './Header/header.data'

type Props = {}
const Layout: FC<PropsWithChildren<Props>> = ({ children }) => {
	return (
		<div className="min-h-screen flex flex-col">
			<Header header={HeaderContent} />
			<div className="flex-grow">{children}</div>
			<Footer />
		</div>
	)
}

export default Layout
