// 03-15. axios 모듈로 json 데이터 조회 예정
// 일단은 조회했다고 가정하고 하드코딩
const posts = [
	{ id: 1, title: '제목1', contents: '내용1', createdAt: '2021-01-01' },
	{ id: 2, title: '제목2', contents: '내용2', createdAt: '2022-02-02' },
	{ id: 3, title: '제목3', contents: '내용3', createdAt: '2023-03-03' },
	{ id: 4, title: '제목4', contents: '내용4', createdAt: '2024-04-04' },
	{ id: 5, title: '제목5', contents: '내용5', createdAt: '2025-05-05' },
];

// 목록을 조회할 수 있도록 getPost 함수 생성
export function getPosts() {
	return posts;
}