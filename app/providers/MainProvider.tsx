import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { FC, PropsWithChildren, useState } from 'react';
import { Provider } from 'react-redux';

import Layout from '@/components/layout/Layout';

import store from '../store/store';

import AuthProvider from './AuthProvider/AuthProvider';
import { HeadProvider } from './HeadProvider/HeadProvider';
import { TypeComponentAuthFields } from '@/utills/typescript/types/auth.type';

const MainProvider: FC<PropsWithChildren<TypeComponentAuthFields>> = ({ children, Component }) => {
	const [queryClient] = useState(() => new QueryClient());

	return (
		<QueryClientProvider client={queryClient}>
			<Provider store={store}>
				<HeadProvider>
					<AuthProvider Component={Component}>
						<Layout>{children}</Layout>
					</AuthProvider>
				</HeadProvider>

				<ReactQueryDevtools initialIsOpen={false} />
			</Provider>
		</QueryClientProvider>
	);
};

export default MainProvider;
