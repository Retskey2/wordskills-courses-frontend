import { NextPage } from 'next'
import { useRouter } from 'next/router'
import React from 'react'

const Courses: NextPage = () => {
	const router = useRouter()

	const { slug } = router.query
	return <div>{slug}</div>
}

export default Courses
