import Admin from '@/components/screens/Admin/Admin';

import { NextAuthPage } from '@/utills/typescript/types/auth.type';

const AdminPage: NextAuthPage = () => {
	return <Admin />;
};

AdminPage.isOnlyAdmin = true;
export default AdminPage;
