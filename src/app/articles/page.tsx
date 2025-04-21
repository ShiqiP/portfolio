import Image from 'next/image'
import { ArticleType } from '../../_type/index.type';

const Projects: React.FC = () => {
    const articles: ArticleType[] = [
        {
            id: 1,
            title: "Mastering React Hooks",
            excerpt: "Deep dive into React Hooks and their practical applications",
            readTime: "5 min",
            date: "2024-01-15",
            image: "/sunflower.jpg"
        },
        {
            id: 2,
            title: "Modern CSS Techniques",
            excerpt: "Exploring advanced CSS features and best practices",
            readTime: "4 min",
            date: "2024-01-10",
            image: "/sunflower.jpg"
        }
    ];
    return (
        <section id="articles" className="min-h-lvh py-20 px-6 bg-gray-800">
            <div className="container mx-auto max-w-4xl">
                <h2 className="text-3xl font-bold mb-12 text-center" data-aos="fade-up">Latest Articles</h2>
                <div className="space-y-8">
                    {articles.map((article) => (
                        <div
                            key={article.id}
                            className="article-card"
                            data-aos="fade-up"
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