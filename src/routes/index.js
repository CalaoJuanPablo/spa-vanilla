import { Header } from '../templates'
import { Home, Character, Error404 } from '../pages'
import { getHash, resolveRoutes } from '../utils'

const routes = {
	'/': Home,
	'/:id': Character,
	'/contact': 'Contact'
}

export async function router() {
	const $header = document.getElementById('header') || null
	const $content = document.getElementById('content') || null
	$header.innerHTML = Header()

	let hash = getHash()
	let route = await resolveRoutes(hash)

	let render = routes[route] ? routes[route] : Error404
	$content.innerHTML = await render()
}
