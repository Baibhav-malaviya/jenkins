// utils/courseUtils.js

import coursesData from "../../data/courses.json"; // Adjust the path as per your project structure

export function getCourseById(courseId: any) {
	const course = coursesData.find((course) => course.id == courseId);
	return course;
}
