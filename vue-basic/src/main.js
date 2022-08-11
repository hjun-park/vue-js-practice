// BootStrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { createApp } from 'vue';
import App from './App.vue';
import AppCard from '@/components/AppCard.vue';

// 컴포넌트를 전역적으로 등록하는 방법
// 전역으로 등록하면 어디서든 컴포넌트 사용 가능
// 전역등록은 사용 비추
const app = createApp(App).mount('#app');
// app.component('AppCard', AppCard);

app.mount('#app');

import 'bootstrap/dist/js/bootstrap.js';
