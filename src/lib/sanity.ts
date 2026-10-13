import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const sanity = createClient({
	projectId: '3b56upnj',
	dataset: 'production',
	apiVersion: '2024-01-01',
	useCdn: false,
});

const builder = imageUrlBuilder(sanity);
export const urlFor = (source: any) => builder.image(source);

const CAMPOS = `_id, title, "slug": slug.current, description, pubDate, category, heroImage, body`;

export function getNoticias() {
	return sanity.fetch(`*[_type == "noticia"] | order(pubDate desc) { ${CAMPOS} }`);
}

export function getNoticiasPorCategoria(categoria: string) {
	return sanity.fetch(
		`*[_type == "noticia" && category == $categoria] | order(pubDate desc) { ${CAMPOS} }`,
		{ categoria },
	);
}

export function getNoticia(slug: string) {
	return sanity.fetch(`*[_type == "noticia" && slug.current == $slug][0] { ${CAMPOS} }`, { slug });
}