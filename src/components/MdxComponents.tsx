import { Image } from './Image';
import { Link } from './Link';
import { NowPlayingExample } from './lab/NowPlayingExample';

export const components = {
	Image,
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
		return <h4 className="text-lg font-bold" {...props} />;
	},
	strong(props: JSX.IntrinsicElements['strong']) {
		return <strong className="font-bold" {...props} />;
	},
	ul(props: JSX.IntrinsicElements['ul']) {
		return (
			<ul
				className="space-y-2 [&>li]:relative [&>li]:pl-6 before:[&>li]:absolute before:[&>li]:left-1.5 before:[&>li]:top-3 before:[&>li]:h-1 before:[&>li]:w-1 before:[&>li]:rounded-full before:[&>li]:bg-gray-6"
				{...props}
			/>
		);
	},
	// Components used in posts as examples:
	NowPlayingExample,
};
