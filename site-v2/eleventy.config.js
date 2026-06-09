module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy({ 'src/assets': 'assets' })
	eleventyConfig.addPassthroughCopy({ 'src/admin': 'admin' })

	eleventyConfig.addFilter('readableDate', (value) => {
		const date = new Date(value)
		return new Intl.DateTimeFormat('en-GB', {
			day: 'numeric',
			month: 'long',
			year: 'numeric',
		}).format(date)
	})

	eleventyConfig.addCollection('activities', (collectionApi) => {
		return collectionApi
			.getFilteredByTag('activity')
			.sort((a, b) => (a.data.order || 999) - (b.data.order || 999))
	})

	eleventyConfig.addCollection('featuredActivities', (collectionApi) => {
		return collectionApi
			.getFilteredByTag('activity')
			.filter((item) => item.data.featured)
			.sort((a, b) => (a.data.order || 999) - (b.data.order || 999))
	})

	eleventyConfig.addCollection('updates', (collectionApi) => {
		return collectionApi.getFilteredByTag('update').sort((a, b) => b.date - a.date)
	})

	eleventyConfig.addCollection('latestUpdates', (collectionApi) => {
		return collectionApi
			.getFilteredByTag('update')
			.sort((a, b) => b.date - a.date)
			.slice(0, 3)
	})

	return {
		dir: {
			input: 'src',
			includes: '_includes',
			data: '_data',
			output: 'dist',
		},
		htmlTemplateEngine: 'njk',
		markdownTemplateEngine: 'njk',
	}
}
