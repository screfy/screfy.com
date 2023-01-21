import { UrlTags } from './UrlTags';

const BASE_URL = 'https://screfy.com';
const DEFAULT_TITLE = 'screfy – Software Engineer';
const DEFAULT_DESCRIPTION =
	'A self-taught software engineer interested in web and serverless technologies and DevOps practices.';

export function Seo({
	title,
	description = DEFAULT_DESCRIPTION,
	image = `${BASE_URL}/og.png`,
}: {
	title?: string;
	description?: string;
	image?: string;
}) {
	const formattedTitle = title ? `${title} – screfy.com` : DEFAULT_TITLE;

	return (
		<>
			<meta charSet="utf-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<meta name="theme-color" content="#161616" />
			<meta name="robots" content="index,follow" />
			<meta name="description" content={description} />
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:site" content="@screfy_" />
			<meta name="twitter:creator" content="@screfy_" />
			<meta property="og:type" content="website" />
			<meta property="og:title" content={formattedTitle} />
			<meta property="og:site_name" content="screfy.com" />
			<meta property="og:image" content={image} />
			<UrlTags baseUrl={BASE_URL} />
			<title>{formattedTitle}</title>
			<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
		</>
	);
}
