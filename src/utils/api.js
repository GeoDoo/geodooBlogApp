const api = {
	fetchSiteInfo() {
		let url = 'https://geodoo.work/wp-json';
		return fetch(url).then((res) => res.json()); 
	},
	fetchPosts() {
		let url = 'https://geodoo.work/wp-json/wp/v2/posts';
		return fetch(url);
	}
};

export default api;