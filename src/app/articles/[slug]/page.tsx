// import { getArticleBySlug, getArticleSlugs } from '../_lib/articles'
export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {

    const { slug } = await params;
    const { default: Post } = await import(`@/markdown/articles/${slug}.mdx`);

    return (
        <Post />
    )
}

import fs from 'fs';
import path from 'path';

export async function generateStaticParams() {
    const filePath = path.join(process.cwd(), 'public', 'articles.json');
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const articles = JSON.parse(fileContent);

    return articles.map((article: { slug: string }) => ({
        slug: article.slug,
    }));
}

// export const dynamicParams = false