import Admin from '@/components/screens/Admin/Admin';

import { NextAuthPage } from '@/utills/typescript/types/auth.type';

const AdminPage: NextAuthPage = () => <Admin />;

AdminPage.isOnlyAdmin = true;
export default AdminPage;
