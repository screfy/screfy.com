import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import GitHubSlugger from 'github-slugger';
import readingTime from 'reading-time';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import {
	rehypePrettyCodeTransformer,
	resolveTypedDocument
} from './src/contentlayer';
import theme from './theme.json';

const HEADING_REGEX = /(#{1,6})\s+(.+)/g;

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
		headings: {
			type: 'json',
			resolve: resolveTypedDocument<{ body: { raw: string } }>(({ body }) => {
				const slugger = new GitHubSlugger();

				const headings = Array.from(body.raw.matchAll(HEADING_REGEX))
					.map((value) => ({
						size: value[1].length,
						content: value[2],
						slug: slugger.slug(value[2])
					}))
					.filter(({ size }) => size <= 3);

				return headings;
			})
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
		imageUrl: {
			type: 'string',
			resolve: resolveTypedDocument<{ url: string }>(({ url }) => {
				const { origin } = new URL(url);

				return `https://s2.googleusercontent.com/s2/favicons?domain=${origin}&sz=32`;
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
					theme,
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
