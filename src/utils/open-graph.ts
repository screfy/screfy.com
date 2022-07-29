// NOTE: We need to double escape strings for commas and slashes.
function encode(str: string) {
	return encodeURIComponent(encodeURIComponent(str));
}

export function generateOpenGraphImage({
	title,
	date
}: {
	title: string;
	date: string;
}) {
	return [
		'https://res.cloudinary.com/screfy/image/upload',
		'q_100',
		`l_text:Karla_38_bold:${encode(title)},co_rgb:EDEDED,c_fit,w_1080`,
		'fl_layer_apply,g_south_west,x_60,y_136',
		`l_text:Karla_24:${encode(`${date} · screfy.com`)},co_rgb:A0A0A0`,
		'fl_layer_apply,g_south_west,x_60,y_100',
		'banner.png'
	].join('/');
}
