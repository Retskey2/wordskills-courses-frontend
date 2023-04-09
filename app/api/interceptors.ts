import axios from 'axios';

import { getContentType } from './api.helpers';

export const axiosClassic = axios.create({
	baseURL: `${process.env.APP_SERVER_URL}/api`,
	headers: getContentType()
});
