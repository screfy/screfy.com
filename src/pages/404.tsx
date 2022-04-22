import ErrorPage from '../components/Page/ErrorPage';

export default function Error404() {
	return (
		<ErrorPage statusCode="404">
			<p>The requested URL does not exist on the server.</p>

			<p className="text-sm">That’s all I know.</p>
		</ErrorPage>
	);
}
