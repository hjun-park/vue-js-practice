import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { createApp } from 'vue';
import App from './App.vue';

// 02-02. 설정된 라우터 객체를 갖고옴
import router from '@/router';

import 'bootstrap/dist/js/bootstrap.js';

// 02-03. 해당 인스턴스에 use 사용해서 router 가져오기
// 이렇게 호출하면 모든 자식 컴포넌트에 `router` `route` 같은 객체 사용 가능
createApp(App).use(router).mount('#app');
import 'bootstrap/dist/js/bootstrap.js';

// 09-08. vite 참조
// MODE는 어떤 모드인지 출력해 주는 환경변수이다.
console.log('MODE: ', import.meta.env.MODE);
console.log('MODE: ', import.meta.env.BASE_URL);
console.log('MODE: ', import.meta.env.PROD);
console.log('MODE: ', import.meta.env.DEV);
console.log('VITE_APP_API_URL:', import.meta.env.VITE_APP_API_URL);
