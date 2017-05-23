const api = {
	fetchPosts() {
		var url = 'http://geodoo.work/wp-json/wp/v2/posts';
		return fetch(url).then((res) => res.json());
	}
};

export default api;