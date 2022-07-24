import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import readingTime from 'reading-time';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import {
	loadTheme,
	rehypePrettyCodeTransformer,
	resolveTypedDocument
} from './src/contentlayer';

const Post = defineDocumentType(() => ({
	name: 'Post',
	contentType: 'mdx',
	filePathPattern: 'posts/*.mdx',
	fields: {
		title: {
			type: 'string',
			required: true
		},
		summary: {
			type: 'string',
			required: true
		},
		publishedAt: {
			type: 'date',
			required: true
		}
	},
	computedFields: {
		slug: {
			type: 'string',
			resolve: ({ _raw }) => _raw.sourceFileName.replace('.mdx', '')
		},
		meta: {
			type: 'json',
			resolve: resolveTypedDocument<{ body: { raw: string } }>(({ body }) =>
				readingTime(body.raw)
			)
		}
	}
}));

const Site = defineDocumentType(() => ({
	name: 'Site',
	filePathPattern: 'sites/*.md',
	fields: {
		title: {
			type: 'string',
			required: true
		},
		url: {
			type: 'string',
			required: true
		},
		date: {
			type: 'date',
			required: true
		}
	},
	computedFields: {
		sanitizedUrl: {
			type: 'string',
			resolve: resolveTypedDocument<{ url: string }>(({ url }) => {
				const { hostname, pathname } = new URL(url);

				return `${hostname}${pathname === '/' ? '' : pathname}`;
			})
		},
		baseUrl: {
			type: 'string',
			resolve: resolveTypedDocument<{ url: string }>(({ url }) => {
				const { origin } = new URL(url);

				return origin;
			})
		}
	}
}));

export default makeSource({
	disableImportAliasWarning: true,
	contentDirPath: 'data',
	documentTypes: [Post, Site],
	mdx: {
		esbuildOptions(options) {
			options.target = 'esnext';

			return options;
		},
		remarkPlugins: [[remarkGfm]],
		rehypePlugins: [
			[rehypeSlug],
			[
				rehypePrettyCode,
				{
					theme: loadTheme(),
					tokensMap: {
						fn: 'entity.name.function',
						objKey: 'meta.object-literal.key'
					}
				}
			],
			[
				rehypeAutolinkHeadings,
				{
					behavior: 'wrap',
					properties: {
						className: [
							`after:ml-1.5 after:inline-block after:h-4 after:w-4 after:bg-[url(/link.svg)] after:bg-cover after:bg-no-repeat after:align-middle after:font-normal after:opacity-0 after:transition-opacity after:content-[''] hover:after:opacity-100`
						]
					}
				}
			],
			[rehypePrettyCodeTransformer]
		]
	}
});
