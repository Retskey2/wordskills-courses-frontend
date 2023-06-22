import { AppProps } from 'next/app';
import MainProvider from 'providers/MainProvider';

import '../styles/globals.scss';

import { TypeComponentAuthFields } from '@/utills/typescript/types/auth.type';

type TypeAppProps = AppProps & TypeComponentAuthFields;

const MyApp = ({ Component, pageProps }: TypeAppProps) => (
	<MainProvider Component={Component}>
		<Component {...pageProps} />
	</MainProvider>
);

export default MyApp;
