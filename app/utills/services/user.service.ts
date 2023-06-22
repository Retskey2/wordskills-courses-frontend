import { ICourse } from "../typescript/interfaces/course.interface"
import { getUsersUrl } from "@/config/api.config"

import axios from '../../api/interceptors'
export const UsersService = {
    async getSubscriptions() {
		return axios.get<ICourse[]>(getUsersUrl('profile/subscription'))
	},

	async toggleSubscriptions(courseId: string) {
		return axios.put<string>(getUsersUrl(`profile/subscription/${courseId}`))
	},

}