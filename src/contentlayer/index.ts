import { LocalDocument } from 'contentlayer/source-files';
import fs from 'node:fs';
import path from 'node:path';

export function resolveTypedDocument<Document, Return = unknown>(
	fn: (doc: Document & LocalDocument) => Return
): (doc: LocalDocument) => Return {
	return (doc) => fn(doc as Document & LocalDocument);
}

export function loadTheme() {
	return JSON.parse(
		fs.readFileSync(path.join(process.cwd(), 'theme.json'), 'utf-8')
	);
}

export { rehypePrettyCodeTransformer } from './code-transformer';
