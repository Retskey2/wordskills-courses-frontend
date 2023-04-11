import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { FC, PropsWithChildren, useState } from 'react';
import { Provider } from 'react-redux';

import Layout from '@/components/layout/Layout';

import store from '../store/store';

import { HeadProvider } from './HeadProvider/HeadProvider';

const MainProvider: FC<PropsWithChildren> = ({ children }) => {
	const [queryClient] = useState(() => new QueryClient());

	return (
		<QueryClientProvider client={queryClient}>
			<Provider store={store}>
				<HeadProvider>
					<Layout>{children}</Layout>
				</HeadProvider>

				<ReactQueryDevtools initialIsOpen={false} />
			</Provider>
		</QueryClientProvider>
	);
};

export default MainProvider;
