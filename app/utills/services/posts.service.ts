import { axiosClassic } from "@/api/interceptors"
import { getPostsUrl } from "@/config/api.config"
import { IPost } from "../typescript/types/posts.types"


export const PostsService = {
    async getPosts() {
		return axiosClassic.get<IPost[]>(getPostsUrl(''))
	},

	async getCount() {
		return axiosClassic.get<number>(getPostsUrl('count'))
	},

	async getPostById(id: number) {
		return axiosClassic.get<IPost>(getPostsUrl(`${id}`))
	}
}