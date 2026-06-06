import postsData from '../data/data.json';

const PAGE_SIZE = 8;

function parseJsonDate(dateStr) {
	if (!dateStr) return null;
	const [day, month, year] = dateStr.split('-');
	return new Date(
		parseInt(year, 10),
		parseInt(month, 10) - 1,
		parseInt(day, 10),
	);
}

export function fetchProfile() {
	return new Promise(resolve => {
		setTimeout(() => resolve(postsData.profile), 300);
	});
}

export function fetchPosts(page = 1, dateFrom = null, dateTo = null) {
	return new Promise(resolve => {
		setTimeout(() => {
			let filteredPosts = postsData.posts;

			if (dateFrom || dateTo) {
				let fromTime = null;
				let toTime = null;

				if (dateFrom) {
					const from = new Date(dateFrom);
					from.setHours(0, 0, 0, 0);
					fromTime = from.getTime();
				}

				if (dateTo) {
					const to = new Date(dateTo);
					to.setHours(23, 59, 59, 999);
					toTime = to.getTime();
				}

				filteredPosts = filteredPosts.filter(post => {
					const postDate = parseJsonDate(post.uploadedDate);
					if (!postDate) return false;

					postDate.setHours(0, 0, 0, 0);
					const postTime = postDate.getTime();

					if (fromTime && postTime < fromTime) return false;
					if (toTime && postTime > toTime) return false;

					return true;
				});
			}

			const start = (page - 1) * PAGE_SIZE;
			const end = start + PAGE_SIZE;
			const posts = filteredPosts.slice(start, end);

			resolve({
				posts,
				hasMore: end < filteredPosts.length,
				total: filteredPosts.length,
			});
		}, 400);
	});
}
