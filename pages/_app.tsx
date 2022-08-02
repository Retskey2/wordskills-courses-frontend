import type { AppProps } from 'next/app'
import MainProvider from 'providers/MainProvider'

import Footer from '@/components/ui/Footer/Footer'
import Header from '@/components/ui/Header/Header'
import { HeaderContent } from '@/components/ui/Header/header.data'

import '../styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<MainProvider>
			<Component {...pageProps} />
		</MainProvider>
	)
}

export default MyApp
