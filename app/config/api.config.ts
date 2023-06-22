export const API_URL = `${process.env.APP_URL}/api`
export const API_SERVER_URL = `${process.env.APP_SERVER_URL}/api`


export const getAuthUrl = (string:string) => `/auth/${string}`
export const getCourseUrl = (string:string) => `/course/${string}`
export const getPostsUrl = (string:string) => `/posts/${string}`
export const getUsersUrl = (string:string) => `/users/${string}`
