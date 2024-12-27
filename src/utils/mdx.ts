import fs from 'node:fs';
import path from 'node:path';
import { compileMDX, type MDXRemoteProps } from 'next-mdx-remote/rsc';

const MDX_FILE_EXTENSION = '.mdx';

export const getFileName = (file: string) =>
	path.basename(file, path.extname(file));

export const listMDXFiles = (dir: string) =>
	fs
		.readdirSync(dir)
		.filter((file) => path.extname(file) === MDX_FILE_EXTENSION);

export const readMDXFile = <FrontmatterData extends object>(
	mdxFile: string,
	components?: MDXRemoteProps['components']
) =>
	compileMDX<FrontmatterData>({
		source: fs.readFileSync(mdxFile, 'utf-8'),
		options: { parseFrontmatter: true },
		components,
	});
