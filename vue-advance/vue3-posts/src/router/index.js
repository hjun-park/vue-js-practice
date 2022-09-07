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
		// 05-08. 라우터에 props 전달하도록 설정
		// 				이렇게 하면 :id가 자식 컴포넌트에게 props로 전달함
		// props: true,

		// 05-10. 객체로 props를 전달하는 방법
		// props: { word: 'hello' },

		// 05-11. 함수로 props를 전달하는 방법 (// route 객체를 던져줌)
		// 09-06. 문자열로 넘어오게 타입캐스팅 하지 않음
		props: true,
		// props: route => {
		// 	return {
		// 		id: parseInt(route.params.id),
		// 	};
		// },
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
	/* 06-01. : 아래를 사용하면 #이 붙는다.
		npm run build를 수행하면 dist 디렉토리가 생성된다.
		디렉토리를 생성하면 html이 1개뿐이다. 이는 vue가 SPA라서 그렇다. (single page application)
		로딩하지 않기 떄문에 빠르게 UI를 보여줄 수 있다.

		---------------------------------------------------------------------------------------------
		SSR
			- 페이지 이동 시 리로딩이 일어남
			- U	I에 보여줄 html 문서를 서버에서 만들어서 내려주는 것을 SSR이라고 한다.
		CSR
			- vue와 같은 프레임워크처럼 client, 즉 js 코드로 html을 생성해 사용자에게 보여주는 것을 말함

		---------------------------------------------------------------------------------------------
		---------------------------------------------------------------------------------------------
		Hash Mode (createWebHashHistory)
			- 자원 요청 시 서버에는 # 뒤에 값들을 보내지 않는다.
			- 즉, localhost 도메인 가지고 요청만 한다.

		History Mode (createWebHistory)
			- hash와는 다르게 전체 경로를 포함하여 요청한다.
		

		---> 그래서
			- 일반적으로 http://localhost:3000/ 을 요청하면 index.html을 찾게 되는데, 
				history mode는 정확히 짚어줘야 한다.
			- 검색엔진은 # 뒤에는 무시하기 떄문에 보통 SEO에 걸리게 하기 위해 History Mode를 사용한다.
		---------------------------------------------------------------------------------------------
	 */
	// history: createWebHashHistory(),
	routes,
});

// router 객체를 사용할 수 있도록 export
export default router;
