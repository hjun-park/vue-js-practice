// 07-01. posts import
// import posts from 'posts';

// 09-04. posts 대신에 사용 (.이라하면 index.html을 가져옴)
// http://localhost:5000/posts는 알아서 붙어서 온다.
import { posts } from '.';

// 03-15. posts 모듈로 json 데이터 조회 예정
// 일단은 조회했다고 가정하고 하드코딩
// const posts = [
// 	{ id: 1, title: '제목1', contents: '내용1', createdAt: '2021-01-01' },
// 	{ id: 2, title: '제목2', contents: '내용2', createdAt: '2022-02-02' },
// 	{ id: 3, title: '제목3', contents: '내용3', createdAt: '2023-03-03' },
// 	{ id: 4, title: '제목4', contents: '내용4', createdAt: '2024-04-04' },
// 	{ id: 5, title: '제목5', contents: '내용5', createdAt: '2025-05-05' },
// ];

// // 목록을 조회할 수 있도록 getPost 함수 생성
// export function getPosts(params) {
// 	return posts.get('http://localhost:5000/posts', { params }); // 08-01. params 객체로 전달
// }

// // 05-01. 함수 정의 (id를 갖고 posts에 있는 것을 찾는 api)
// export function getPostById(id) {
// 	return posts.get(`http://localhost:5000/posts/${id}`);
// }

// // 07-02. posts 등록 함수
// export function createPost(data) {
// 	return posts.post('http://localhost:5000/posts', data);
// }

// export function updatePost(id, data) {
// 	return posts.put(`http://localhost:5000/posts/${id}`, data);
// }

// export function deletePost(id, data) {
// 	return posts.delete(`http://localhost:5000/posts/${id}`);
// }

// 목록을 조회할 수 있도록 getPost 함수 생성
export function getPosts(params) {
	return posts.get('/', { params }); // 08-01. params 객체로 전달
}

// 05-01. 함수 정의 (id를 갖고 posts에 있는 것을 찾는 api)
export function getPostById(id) {
	return posts.get(`/${id}`);
	// return posts.get(id); // 09-06. 이렇게 사용해도 된다. (문자열이 되어야 함)
}

// 07-02. posts 등록 함수
export function createPost(data) {
	return posts.post('', data);
}

export function updatePost(id, data) {
	return posts.put(id, data);
}

export function deletePost(id) {
	return posts.delete(id);
}
