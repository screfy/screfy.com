import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import readingTime from 'reading-time';

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
  },
}));

export default makeSource({
  contentDirPath: 'data',
  documentTypes: [Article],
});
