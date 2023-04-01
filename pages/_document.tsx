import { Head, Html, Main, NextScript } from 'next/document';

export const Document = () => (
	<Html>
		<Head>
			<link href='https://fonts.googleapis.com' rel='preconnect' />
			<link href='https://fonts.gstatic.com' rel='preconnect' />
			<link
				href='https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap'
				rel='stylesheet'
			/>
		</Head>
		<body>
			<Main />
			<NextScript />
		</body>
	</Html>
);
