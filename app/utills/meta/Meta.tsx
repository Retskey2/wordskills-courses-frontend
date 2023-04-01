import { siteName, titleMerge } from 'config/seo.config';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { FC, PropsWithChildren } from 'react';

import logoImage from '@/assets/image/college-icon.svg';

import { onlyText } from '../string/clearText';

import { ISeo } from './meta.interface';

export const Meta: FC<PropsWithChildren<ISeo>> = ({ title, description, image, children }) => {
	const { asPath } = useRouter();
	const currentUrl = `${process.env.APP_URL}${asPath}`;

	return (
		<>
			<Head>
				<title itemProp='headline'>{titleMerge(title)}</title>
				{description ? (
					<>
						<meta content={onlyText(description, 152)} itemProp='description' name='description' />
						<link href={currentUrl} rel='canonical' />
						<meta content='en' property='og:locale' />
						<meta content={titleMerge(title)} property='og:title' />
						<meta content={currentUrl} property='og:url' />
						<meta content={image || logoImage} property='og:image' />
						<meta content={siteName} property='og:site_name' />
						<meta content={onlyText(description, 197)} property='og:description' />
					</>
				) : (
					<meta content='noindex, nofollow' name='robots' />
				)}
			</Head>
			{children}
		</>
	);
};
