import { getHash, getData } from '../utils'

export async function Character() {
	const characterId = getHash()
	const characterData = await getData(characterId)

	const view = `
		<div class="Characters-inner">
			<article class="Characters-card">
				<img src="${characterData.image}" alt="${characterData.name}" />
				<h2>${characterData.name}</h2>
			</article>
			<article class="Characters-card">
				<h3>Episodes: <span>${characterData.episode.length}</span></h3>
				<h3>Status: <span>${characterData.status}</span></h3>
				<h3>Species: <span>${characterData.species}</span></h3>
				<h3>Gender: <span>${characterData.gender}</span></h3>
				<h3>Origin: <span>${characterData.origin.name}</span></h3>
				<h3>Last Location: <span>${characterData.location.name}</span></h3>
			</article>
		</div>
	`

	return view
}
