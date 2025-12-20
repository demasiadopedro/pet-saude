import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders'; // Importe o glob

const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image().optional(),
		}),
});

const gats = defineCollection({
    // MUDANÇA AQUI: Usamos o loader igual ao blog
	loader: glob({ base: './src/content/gats', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(), // Ex: "GAT 1"
		cenario: z.string(), // Ex: "Centro de Saúde Mapiri"
		description: z.string(), // Resumo
		google_maps: z.string().optional(),
		heroImage: z.string().optional(), 
		
	}),
});

export const collections = { blog, gats };