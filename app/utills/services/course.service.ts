import { axiosClassic } from "@/api/interceptors"
import { getCourseUrl, getUsersUrl } from "@/config/api.config"
import { ICourse } from "../typescript/interfaces/course.interface"
import { IUser } from "../typescript/types/user.types"

interface IUserHasCourse {
	userId: number,
    courseId: number
}

export const CourseService = {
    async updateCountOpened(id: number) {
		return axiosClassic.put<string>(getCourseUrl(`update-count-opened/${id}`))
	},

	async getCount() {
		return axiosClassic.get<string>(getCourseUrl(`count`))
	},

	async getPopular() {
		return axiosClassic.get<ICourse[]>(getCourseUrl(`most-popular`))
	},

	async getSubscriptions(id: string) {
		return axiosClassic.get<IUser[]>(getCourseUrl(`subscriptions/${id}`))
	}
}