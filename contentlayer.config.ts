import {
	defineDocumentType,
	LocalDocument,
	makeSource
} from 'contentlayer/source-files';
import readingTime from 'reading-time';

function resolveTypedDocument<Document, Return = unknown>(
	fn: (doc: Document & LocalDocument) => Return
): (doc: LocalDocument) => Return {
	return (doc) => fn(doc as Document & LocalDocument);
}

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
	documentTypes: [Post, Site]
});
