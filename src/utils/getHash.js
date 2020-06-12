export function getHash() {
	return location.hash.slice(1).toLowerCase().split('/')[1] || '/'
}
