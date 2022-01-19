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
  getters: {
    nameAndAge: (state: any) => state.name + state.age, // 与vuex相同的使用方式
    doubleAge(): number { // 使用箭头函数和不使用this的方式不会影响ts类型推断，所以使用普通函数且里面有this的情况需要对函数的返回类型进行说明
      // 如果需要使用到起它的getters时，需要访问整个store实例
      // 因此不能使用箭头函数，箭头函数中的this与定义地方外面的this一致。
      return this.age * 2;
    }
  },
})
