import { Link } from './Link';

// TODO: ul, ol, image

export const components = {
	a(props: JSX.IntrinsicElements['a']) {
		if (props.href?.startsWith('#')) {
			return <a {...props} />;
		}

		return <Link href={props.href || '/'}>{props.children}</Link>;
	},
	h1(props: JSX.IntrinsicElements['h1']) {
		return <h2 className="text-2xl font-bold" {...props} />;
	},
	h2(props: JSX.IntrinsicElements['h2']) {
		return <h3 className="text-xl font-bold" {...props} />;
	},
	h3(props: JSX.IntrinsicElements['h3']) {
		return <h3 className="text-lg font-bold" {...props} />;
	},
	strong(props: JSX.IntrinsicElements['strong']) {
		return <strong className="font-bold" {...props} />;
	}
};
