import { ReactChild } from 'react';
import Page from '.';
import Section from '../Section';

interface Props {
	statusCode: number | string;
	children?: ReactChild | ReactChild[];
}

export default function ErrorPage({ statusCode, children }: Props) {
	return (
		<Page title={`Error ${statusCode}`} seo={{ noindex: true, nofollow: true }}>
			<Section>
				{children === undefined ? <p>Something went wrong.</p> : children}
			</Section>
		</Page>
	);
}
