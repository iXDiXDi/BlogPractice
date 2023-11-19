export const generateDate = () =>
	new Date(Math.random() * 1000000000000 + 199999999999)
		.toISOString()
		.substring(0, 16)
		.replace('T', ' ');
