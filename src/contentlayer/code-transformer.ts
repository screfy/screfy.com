import { Node, visit } from 'unist-util-visit';

const INLINE_CODE =
	'inline-block rounded-md border border-gray-6 bg-gray-3 px-1 py-px font-mono text-sm';

const CODE_DIV = '-mx-4 overflow-hidden rounded-xl';
const CODE_TITLE =
	'flex justify-between bg-gray-3 px-4 py-2 text-base text-gray-11';
const CODE_PRE =
	'overflow-x-auto bg-gray-2 p-4 font-mono text-sm leading-relaxed';

export function rehypePrettyCodeTransformer() {
	return (tree: Node) => {
		visit(
			tree,
			(node: any) =>
				node.tagName === 'code' &&
				Object.keys(node.properties).length === 0 &&
				node.children.some((n: any) => n.type === 'text'),
			(node: any) => {
				node.properties.className = [INLINE_CODE];
			}
		);

		visit(
			tree,
			(node: any) =>
				typeof node?.properties?.['data-rehype-pretty-code-fragment'] !==
				'undefined',
			(node: any) => {
				if (node.tagName === 'div') {
					node.properties.className = [CODE_DIV];

					node.children = node.children.map((node: any) => {
						if (
							node.tagName === 'div' &&
							typeof node.properties?.['data-rehype-pretty-code-title'] !==
								'undefined'
						) {
							node.properties.className = [CODE_TITLE];
						}

						if (node.tagName === 'pre') {
							node.properties.className = [CODE_PRE];
						}

						return node;
					});
				}

				return node;
			}
		);
	};
}
