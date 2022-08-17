// 02-01. 라우터 설정은 여기서 진행
import { createRouter, createWebHistory } from 'vue-router'; // 뷰 라우터 정보 갖고있음
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';

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
];

const router = createRouter({
	history: createWebHistory('/'),
	routes,
});

// router 객체를 사용할 수 있도록 export
export default router;
