export type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;

export type InferStaticParams<T extends () => Promise<any>> = Promise<
	UnwrapPromise<ReturnType<T>>[number]
>;
