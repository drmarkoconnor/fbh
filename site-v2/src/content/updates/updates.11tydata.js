module.exports = {
	tags: ['update'],
	layout: 'layouts/update.njk',
	permalink: (data) => `/updates/${data.page.fileSlug}/`,
}
