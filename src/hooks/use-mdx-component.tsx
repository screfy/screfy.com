import React, { useMemo } from 'react';
import ReactDOM from 'react-dom';
import _jsx_runtime from 'react/jsx-runtime';

function getMdxComponent(code: string) {
	const scope = { React, ReactDOM, _jsx_runtime };
	const fn = new Function(...Object.keys(scope), code);
	return fn(...Object.values(scope)).default;
}

// NOTE: When using the next-contentlayer `useMDXComponent` hook, the component
// is being re-rendered when a state changes in the parent component because of
// the `globals` dependency.
export function useMdxComponent(code: string) {
	return useMemo(() => getMdxComponent(code), [code]);
}
