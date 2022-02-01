import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import readingTime from 'reading-time';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypePrism from 'rehype-prism-plus';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

const PostDocument = defineDocumentType(() => ({
  name: 'PostDocument',
  bodyType: 'mdx',
  filePathPattern: 'posts/*.mdx',
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
      resolve: async (doc) =>
        doc.body.raw.split(/\s+/gu).filter(Boolean).length,
    },
  },
}));

export default makeSource({
  contentDirPath: 'data',
  documentTypes: [PostDocument],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeCodeTitles,
      rehypePrism,
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['anchor'],
          },
        },
      ],
    ],
  },
});
