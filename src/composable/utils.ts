import { MaybeRef } from "@vueuse/core";
import { ComputedRef, Ref } from "vue";

export type MaybeComputedRef<T> = T extends () => void
  ? never
  : (() => T) | MaybeRef<T>
/**
 * Normalize value/ref/getter to `ref` or `computed`.
 */
export function resolveUnref<T>(r: MaybeComputedRef<T>): T {
  return typeof r === 'function'
    ? (r as any)()
    : unref(r);
}
/**
 * Normalize value/ref/getter to `ref` or `computed`.
 */
export function resolveRef<T>(r: MaybeComputedRef<T>): ComputedRef<T>
export function resolveRef<T>(r: MaybeRef<T>): Ref<T>
export function resolveRef<T>(r: T): Ref<T>
export function resolveRef<T>(r: MaybeComputedRef<T>) {
  return typeof r === 'function'
    ? computed<T>(r as any)
    : ref(r)
}
