// import { getArticleBySlug, getArticleSlugs } from '../_lib/articles'
export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {

    const { slug } = await params;
    const { default: Post } = await import(`@/markdown/articles/${slug}.mdx`);

    return (
        <Post/>
    )
}
// export function generateStaticParams() {
//     return [{ slug: 'welcome' }, { slug: 'this' }]
// }

// export const dynamicParams = false