import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { FC, PropsWithChildren, useState } from 'react';

import Layout from '@/components/layout/Layout';

import { HeadProvider } from './HeadProvider/HeadProvider';

const MainProvider: FC<PropsWithChildren> = ({ children }) => {
	const [queryClient] = useState(() => new QueryClient());

	return (
		<QueryClientProvider client={queryClient}>
			<HeadProvider>
				<Layout>{children}</Layout>
			</HeadProvider>

			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
};

export default MainProvider;
