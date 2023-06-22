import { axiosClassic } from "@/api/interceptors"
import { getCourseUrl, getUsersUrl } from "@/config/api.config"

export const CourseService = {
    async updateCountOpened(id: number) {
		return axiosClassic.put<string>(getCourseUrl(`update-count-opened/${id}`))
	}
}