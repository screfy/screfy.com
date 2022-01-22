import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import { format } from 'date-fns';
import readingTime from 'reading-time';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypePrism from 'rehype-prism-plus';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

const DATE_FORMAT = 'MMMM do, yyyy';

const Article = defineDocumentType(() => ({
  name: 'Article',
  bodyType: 'mdx',
  filePathPattern: 'articles/*.mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    summary: {
      type: 'string',
      required: true,
    },
    publishedAt: {
      type: 'date',
      required: true,
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: async (doc) => doc._raw.sourceFileName.replace('.mdx', ''),
    },
    readingTime: {
      type: 'string',
      resolve: async (doc) => readingTime(doc.body.raw).text,
    },
    wordCount: {
      type: 'number',
      resolve: async (doc) => doc.body.raw.split(/\s+/gu).filter(Boolean).length,
    },
    humanReadableDate: {
      type: 'string',
      resolve: async (doc) => format(new Date(doc.publishedAt), DATE_FORMAT),
    },
  },
}));

export default makeSource({
  contentDirPath: 'data',
  documentTypes: [Article],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeCodeTitles, rehypePrism, rehypeSlug],
  },
});
