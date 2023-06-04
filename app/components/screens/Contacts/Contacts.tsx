import { FC } from 'react';
import { Meta } from 'utills/meta/Meta';

import { WrapperContent } from '@/components/layout/WrapperContent';
import Heading from '@/components/ui/Heading/Heading';
import SubHeading from '@/components/ui/Heading/SubHeading';

import styles from './Contacts.module.scss';

const Contacts: FC = () => (
	<Meta title='Контакты'>
		<WrapperContent>
			<Heading small title='КОНТАКТЫ' />
			<SubHeading>Доступны в любое время для вас</SubHeading>
			<div className={styles.contacts}>
				<div>
					<ul>
						<li>Адрес</li>
						<li>Санкт-Петерубрг, ул. Связи, д.4</li>
					</ul>
					<ul className='mt-8'>
						<li>E-mail</li>
						<li>support@worldskills.ru</li>
					</ul>
				</div>
				<div>
					<ul className='ml-24'>
						<li>Телефон</li>
						<li>+7(ХХХ)ХХХ-ХХ-ХХ</li>
						<li>+7(ХХХ)ХХХ-ХХ-ХХ</li>
						<li>+7(ХХХ)ХХХ-ХХ-ХХ</li>
					</ul>
				</div>
			</div>
		</WrapperContent>
	</Meta>
);

export default Contacts;
