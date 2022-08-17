// 02-06. <RouterLink> 태그는 등록된 문법이 아님
// 따라서 여기에 등록하여 타입체킹 하도록 설정
decalre module '@vue/runtime-core' {
  export interface GlobalComponents {
    RouterLink: typeof import('vue-router')['RouterLink']
    RouterView: typeof import('vue-router')['RouterView']
  }
}

export {}