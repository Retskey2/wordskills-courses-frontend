import { FC } from 'react';

import { WrapperContent } from '@/components/layout/WrapperContent';
import Heading from '@/components/ui/Heading/Heading';

import { Meta } from '@/utills/meta/Meta';

const Admin: FC = () => {
	return (
		<Meta title='Admin panel'>
			<WrapperContent>
				<Heading title='Админ панель' />
			</WrapperContent>
		</Meta>
	);
};

export default Admin;
