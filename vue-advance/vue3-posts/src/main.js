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
