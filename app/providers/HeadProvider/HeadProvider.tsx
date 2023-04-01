import { accentColor } from 'config/constants';
import Head from 'next/head';
import NextProgressBar from 'nextjs-progressbar';
import { FC, PropsWithChildren } from 'react';

import Favicons from './Favicons';

type Props = {};
export const HeadProvider: FC<PropsWithChildren<Props>> = ({ children }) => (
	<>
		<NextProgressBar color={accentColor} height={3} startPosition={0.3} stopDelayMs={200} />
		<Head>
			<meta charSet='UTF-8' />
			<meta content='width=device-width, initial-scale=1, maximum-scale=1.0' name='viewport' />

			<Favicons />
			<meta content='#181B1E' name='theme-color' />
			<meta content='#181B1E' name='msapplication-navbutton-color' />
			<meta content='#181B1E' name='apple-mobile-web-app-status-bar-style' />
		</Head>
		{children}
	</>
);
