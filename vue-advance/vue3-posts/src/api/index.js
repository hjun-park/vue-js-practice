// 09-01. Vite 환경변수 설정
//  axios create는 새로운 axios
import axios from 'axios';

function create(baseURL, options) {
	// 09-03. 아래와 같음
	const instance = axios.create(Object.assign({ baseURL }, options));

	// const instance = ({
	// 	baseURL: baseURL,
	// 	...options, // 09-02. timeout, header 값에 대해 정의하기 위한 전개구문
	// });
	return instance;
}

//09-05. 만약 다른 api를 사용할 것이다 하면 여기에 추가해 주면 된다.
// export const posts = create('http://localhost:5000/posts/');
// 09-12. 환경변수를 설정했다면 아래처럼 가능
export const posts = create(`${import.meta.env.VITE_APP_API_URL}posts/`);

// 09-07. 환경변수 설정하는 방법
// dev : http://localhost:5000/posts/
// product : http://localhost:5001/posts/
