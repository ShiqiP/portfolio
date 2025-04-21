
export interface ProjectType {
    id: number;
    title: string;
    description: string;
    image: string;
    technologies: string[];
    demoLink: string;
}

export interface ArticleType {
    id: number;
    title: string;
    excerpt: string;
    readTime: string;
    date: string;
    image: string;
}