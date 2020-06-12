import { Header } from '../templates'
import { Home, Character, Error404 } from '../pages'

const routes = {
	'/': Home,
	'/:id': Character,
	'/contact': 'Contact'
}

export async function router() {
	const $header = document.getElementById('header') || null
	const $content = document.getElementById('content') || null
	$header.innerHTML = Header()
}
