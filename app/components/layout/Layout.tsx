import { FC, PropsWithChildren } from 'react';

import Footer from './Footer/Footer';
import Header from './Header/Header';
import { HeaderContent } from './Header/header.data';
import styles from './Layout.module.scss';

type Props = {};
const Layout: FC<PropsWithChildren<Props>> = ({ children }) => (
	<div className={styles.wrapper}>
		<Header header={HeaderContent} />
		<div className={styles.content}>{children}</div>
		<Footer />
	</div>
);

export default Layout;
