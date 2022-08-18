// 02-01. 라우터 설정은 여기서 진행
import { createRouter, createWebHistory } from 'vue-router'; // 뷰 라우터 정보 갖고있음
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
// 03-01. posts에서 만들어주었던 Page Component를 import
import PostCreateView from '@/views/posts/PostCreateView.vue';
import PostDetailView from '@/views/posts/PostDetailView.vue';
import PostEditView from '@/views/posts/PostEditView.vue';
import PostListView from '@/views/posts/PostListView.vue';

// 라우터 매핑 정보
const routes = [
	{
		path: '/',
		name: 'Home', // 02-10. 라우터에 이름 설정
		component: HomeView,
	},
	{
		path: '/about',
		name: 'About',
		component: AboutView,
	},

	// 03-02. 컴포넌트 import 했으면 아래에 route mapping 지정
	// 위와 다르게 이름없는 컴포넌트를 지정할 예정
	{
		path: '/posts',
		name: 'PostList',
		component: PostListView,
	},
	{
		path: '/posts/create',
		name: 'PostCreate',
		component: PostCreateView,
	},
	// 03-03. :id -> 동적 라우팅(여러 개의 URL 하나의 페이지에 매핑)
	{
		path: '/posts/:id',
		// 03-21. 이름 지정
		name: 'PostDetail',
		component: PostDetailView,
	},
	{
		path: '/posts/:id/edit',
		name: 'PostEdit',
		component: PostEditView,
	},
];

const router = createRouter({
	history: createWebHistory('/'),
	routes,
});

// router 객체를 사용할 수 있도록 export
export default router;
