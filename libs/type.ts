/**
 * K is part of T
 * T is target type / interface
 * K is the key what i want to omit
 */
export type PartiallyPartial<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>