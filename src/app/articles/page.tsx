'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { ArticleType } from '@/type/index.type';
import { useEffect, useState } from 'react';


const Projects: React.FC = () => {
    const [articles, setArticles] = useState<ArticleType[]>([]);
    useEffect(() => {
        const fetchArticles = async () => {
            const res = await fetch('./articles.json');
            const data = await res.json();
            setArticles(data);
        }
        fetchArticles();
    }, [])

    const router = useRouter();
    const go2Article = (article: ArticleType) => {
        router.push(`/articles/${article.slug}`)
    }
    return (
        <section id="articles" className="page">
            <div className="container mx-auto max-w-4xl">
                <h2 className="text-3xl font-bold mb-12 text-center" data-aos="fade-up">Articles</h2>
                <div className="space-y-8">
                    {articles.map((article) => (
                        <div
                            key={article.id}
                            className="article-card"
                            data-aos="fade-up"
                            onClick={() => go2Article(article)}
                        >
                            <div className="md:flex gap-6 items-center">
                                <div className="w-full md:w-1/3 mb-4 md:mb-0">
                                    <Image
                                        priority={true}
                                        src={`${process.env.NEXT_PUBLIC_BASE_PATH}${article.image}`}
                                        alt={article.title}
                                        width={192}
                                        height={500}
                                        className="w-full h-48 object-cover rounded-xl"
                                    />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold mb-2">{article.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-300 mb-4">{article.excerpt}</p>
                                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                                        <span>{article.date}</span>
                                        <span className="mx-2">•</span>
                                        <span>{article.readTime} read</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    )
}

export default Projects;