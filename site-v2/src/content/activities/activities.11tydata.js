module.exports = {
	tags: ['activity'],
	layout: 'layouts/activity.njk',
	permalink: (data) => `/activities/${data.page.fileSlug}/`,
}
