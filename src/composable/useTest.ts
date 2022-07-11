import { MaybeComputedRef, resolveRef, resolveUnref } from "./utils";

// 传进来的是可以是value/ref/getter
// export const useTest = (input: MaybeComputedRef<number>) => computed(() => resolveUnref(input))
export const useTest = (input: MaybeComputedRef<number>) => resolveRef(input)
