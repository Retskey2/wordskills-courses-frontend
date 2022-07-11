import type { AppProps } from 'next/app'

import Footer from '@/components/ui/Footer/Footer'
import Header from '@/components/ui/Header/Header'
import { HeaderContent } from '@/components/ui/Header/header.data'

import '../styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Header header={HeaderContent} />
			<Component {...pageProps} />
			<Footer />
		</>
	)
}

export default MyApp
