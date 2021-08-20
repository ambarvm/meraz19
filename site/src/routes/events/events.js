import categories from './events-grid.json';

/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export async function get() {
	const events = await Promise.all(
		Object.entries(import.meta.glob('./*.md')).map(async ([path, page]) => {
			const { metadata } = await page();
			const filename = path.split('/').pop();
			return { ...metadata, filename };
		}),
	);

	if (events) {
		for (const category of categories) {
			for (const event of category.events) {
				event.image = events.find((e) => e.name === event.name).image;
			}
		}

		return {
			body: categories,
		};
	}
	return {
		error: new Error(),
		body: undefined,
	};
}
