// 02-01. 라우터 설정은 여기서 진행
import { createRouter, createWebHistory } from 'vue-router'; // 뷰 라우터 정보 갖고있음
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
// 03-01. posts에서 만들어주었던 Page Component를 import
import PostCreateView from '@/views/posts/PostCreateView.vue';
import PostDetailView from '@/views/posts/PostDetailView.vue';
import PostEditView from '@/views/posts/PostEditView.vue';
import PostListView from '@/views/posts/PostListView.vue';
import NotFoundView from '@/views/NotFoundView.vue';
// 04-04. 중첩 라우터에 대한 경로 설정
import NestedView from '@/views/nested/NestedView.vue';
// 04-09. Nested One, Two 경로에 추가
import NestedOneView from '@/views/nested/NestedOneView.vue';
import NestedTwoView from '@/views/nested/NestedTwoView.vue';
import NestedHomeMyView from '@/views/nested/NestedHomeMyView.vue';

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
	// 04-01. 404처리 route 설정
	{
		path: '/:pathMatch(.*)*',
		name: 'NotFound',
		component: NotFoundView,
	},
	// 04-05. 중첩 라우터에 대한 경로 설정
	{
		path: '/nested',
		name: 'Nested',
		component: NestedView,
		// 04-09. 중첩 라우터 설정은 다음과 같이 진행
		children: [
			// 04-13. Nested만 클릭 했을 때 (home) 출력하고 싶으면 아래와 같이 설정
			{
				// 04-11. one은 이후에 /nested/one 으로 붙는다.
				path: '',
				name: 'NestedHome',
				component: NestedHomeMyView,
			},
			{
				// 04-11. one은 이후에 /nested/one 으로 붙는다.
				path: 'one',
				name: 'NestedOne',
				component: NestedOneView,
			},
			{
				path: 'two',
				name: 'NestedTwo',
				component: NestedTwoView,
			},
		],
	},
];

const router = createRouter({
	history: createWebHistory('/'),
	routes,
});

// router 객체를 사용할 수 있도록 export
export default router;
