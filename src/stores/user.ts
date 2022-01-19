import { defineStore } from 'pinia'

// 返回的函数名需要命名为 useXcc
// 第一个参数是name，可以看做是id，需要唯一，pinia通过这个id连接devtools
export const useStore = defineStore('main', {
  // 推荐使用箭头函数以获得全部类型推断
  state: () => {
    return {
      // 这些属性都会自动进行类型推断
      age: 0,
      name: 'Haoyi Shen',
      gender: 'male',
    }
  },
  actions: {
    ageIncrement() {
      this.age++;
    },
  },
})
