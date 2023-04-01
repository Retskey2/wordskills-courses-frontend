import type { AppProps } from 'next/app';
import MainProvider from 'providers/MainProvider';

import '../styles/globals.scss';

const MyApp = ({ Component, pageProps }: AppProps) => (
	<MainProvider>
		<Component {...pageProps} />
	</MainProvider>
);

export default MyApp;
