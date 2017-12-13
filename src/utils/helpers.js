export const transformApostrophe = (string) => {
	const apostrophe = string.includes('&#8217;')
	if (apostrophe) {
		let re = /&#8217;/gi
		return string.replace(re, '\'')
	}
	return string
}